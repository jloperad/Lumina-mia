import fs from 'node:fs'
import path from 'node:path'

export function getImageFiles() {
  const imagesDirectory = path.join(process.cwd(), 'public/images')
  const imageFiles = fs.readdirSync(imagesDirectory)
  
  // Filter for image files
  const images = imageFiles
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .sort()
    .reverse()

  // Distribute images across three columns
  const columns = [[], [], []]
  images.forEach((image, index) => {
    columns[index % 3].push(image)
  })

  return columns
}