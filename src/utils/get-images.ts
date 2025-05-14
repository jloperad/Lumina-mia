import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'public/images');
const ONE_MB = 1 * 1024 * 1024;
const TARGET_SIZE = 500 * 1024;

async function compressImageIfNeeded(filePath: string) {
  const stat = await fs.stat(filePath);
  if (stat.size <= ONE_MB) return;

  const ext = path.extname(filePath).toLowerCase();
  let buffer: Buffer;
  let quality = 80;

  // Crea un pipeline Sharp según el tipo
  const pipeline = sharp(filePath);

  if (ext === '.jpg' || ext === '.jpeg') {
    buffer = await pipeline.jpeg({ quality }).toBuffer();
    while (buffer.length > TARGET_SIZE && quality > 10) {
      quality -= 10;
      buffer = await pipeline.jpeg({ quality }).toBuffer();
    }
  } else if (ext === '.webp') {
    buffer = await pipeline.webp({ quality }).toBuffer();
    while (buffer.length > TARGET_SIZE && quality > 10) {
      quality -= 10;
      buffer = await pipeline.webp({ quality }).toBuffer();
    }
  } else if (ext === '.png') {
    // PNG es lossless; sube compresión al máximo
    buffer = await pipeline.png({ compressionLevel: 9 }).toBuffer();
    // no hay mucho más margen en PNG sin convertir de formato
  } else {
    return; // gif u otros: omitimos
  }

  // Sobre-escribe el archivo (in-place)
  await fs.writeFile(filePath, buffer);
  console.log(
    buffer.length <= TARGET_SIZE
      ? `✔ Comprimida ${path.basename(filePath)} → ${(buffer.length/1024).toFixed(0)} KB (q=${quality})`
      : `⚠︎ Quedó en ${(buffer.length/1024).toFixed(0)} KB tras compresión máxima`
  );
}

export async function getImageFiles(): Promise<string[][]> {
  const files = await fs.readdir(IMAGES_DIR);
  const images = files
    .filter(f => /\.(jpe?g|png|gif|webp)$/i.test(f))
    .reverse();

  // Comprime en serie (podrías paralelizar)
  for (const img of images) {
    const full = path.join(IMAGES_DIR, img);
    await compressImageIfNeeded(full);
  }

  // Reparto en 3 columnas
  const columns: string[][] = [[], [], []];
  images.forEach((img, i) => columns[i % 3].push(img));
  return columns;
}
