import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

export function getImageFiles() {
  const imagesDirectory = path.join(process.cwd(), 'public/images');
  const imageFiles = fs.readdirSync(imagesDirectory);

  // Filter for image files and reverse the order
  const images = imageFiles
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .reverse();

  // Explicitly type the columns array as string[][]
  const columns: string[][] = [[], [], []];
  images.forEach((image, index) => {
    columns[index % 3].push(image);
  });

  return columns;
}

export async function reduceImageSize(imagePath: string, outputPath: string, quality: number = 80) {
  try {
    await sharp(imagePath)
      .jpeg({ quality })
      .png({ quality })
      .toFile(outputPath);
  } catch (error) {
    console.error(`Error reducing image size for ${imagePath}:`, error);
  }
}