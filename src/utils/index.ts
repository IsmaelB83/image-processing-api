import { promises as fsPromises, constants } from 'fs';
import sharp from 'sharp';

const resize = async (path: string, file: string, width: number, height: number): Promise<string> => {   

  // Returns a promise
  return new Promise((resolve, reject) => {
    // Local definitions
    const aux: Array<string> = file.split('.');
    const newImage: string = `${path}thumbnails/${aux[0]}_${width}x${height}.${aux[1]}`
    const oldImage: string = path + file;
    // Check if thumbnail already exists
    fsPromises.access(newImage, constants.R_OK)
    .then(() => resolve(newImage))
    .catch(error => {
      // Resize
      sharp(oldImage)
      .resize(width, height, { fit:  "contain" })
      .toFile(newImage, (err, info) => { 
        if (err) reject(err)
        if (info) resolve(newImage);
      });
    });
  });

}

export default resize;