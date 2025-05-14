import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC_DIR   = path.join(process.cwd(), 'public/images');
const OUT_DIR   = path.join(process.cwd(), 'public/images/optimized');
const ONE_MB    = 1 * 1024 * 1024;
const TARGET_B  = 500 * 1024;

// Crea la carpeta de salida si no existe
async function ensureOutDir() {
  await fs.mkdir(OUT_DIR, { recursive: true });
}

async function compressAndSave(srcPath: string) {
  const name = path.basename(srcPath);
  const outPath = path.join(OUT_DIR, name);

  const { size: origSize } = await fs.stat(srcPath);
  if (origSize <= ONE_MB) {
    await fs.copyFile(srcPath, outPath);
    return;
  }

  const ext = path.extname(name).toLowerCase();
  // Aplica rotación EXIF automática para mantener la orientación correcta
  const pipeline = sharp(srcPath).rotate();
  let buffer: Buffer;
  let quality = 80;

  if (ext === '.jpg' || ext === '.jpeg') {
    buffer = await pipeline.jpeg({ quality }).toBuffer();
    while (buffer.length > TARGET_B && quality > 10) {
      quality -= 10;
      buffer = await pipeline.jpeg({ quality }).toBuffer();
    }
  } else if (ext === '.webp') {
    buffer = await pipeline.webp({ quality }).toBuffer();
    while (buffer.length > TARGET_B && quality > 10) {
      quality -= 10;
      buffer = await pipeline.webp({ quality }).toBuffer();
    }
  } else if (ext === '.png') {
    buffer = await pipeline.png({ compressionLevel: 9 }).toBuffer();
  } else {
    await fs.copyFile(srcPath, outPath);
    return;
  }

  // Guarda la versión optimizada
  await fs.writeFile(outPath, buffer);
  console.log(
    `✔ ${name}: ${(origSize/1024).toFixed(0)}KB → ${(buffer.length/1024).toFixed(0)}KB (q=${quality})`
  );
}

export async function getImageFiles(): Promise<string[][]> {
  await ensureOutDir();
  const files = await fs.readdir(SRC_DIR);
  const images = files.filter(f => /\.(jpe?g|png|gif|webp)$/i.test(f)).reverse();

  // Comprime o copia cada imagen al sub-directorio "optimized" aplicando rotación
  await Promise.all(
    images.map(img => compressAndSave(path.join(SRC_DIR, img)))
  );

  // Genera columnas con rutas a optimized
  const columns: string[][] = [[], [], []];
  images.forEach((img, i) => {
    columns[i % 3].push(`images/optimized/${img}`);
  });
  return columns;
}