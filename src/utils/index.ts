// Node imports
import { promises as fsPromises, constants } from 'fs';
import sharp from 'sharp';

const resize = async (path: string, file: string, width: number, height: number): Promise<string> => {   

  // Returns a promise
  return new Promise((resolve, reject) => {
    // Local definitions
    const aux = file.split('.');
    const newImage = `${path}thumbnails/${aux[0]}_${width}x${height}.${aux[1]}`
    const oldImage: string = path + file;
    // Check both width and height are greather than 0
    if (height <= 0 || width <= 0) return reject ('Width and Height should be greater than 0');
    // Check both width and height are numbers 
    if (typeof width !== 'number' || typeof height !== 'number') return reject ('Width and Height should be numbers');
    // Check if thumbnail already exists
    fsPromises.access(newImage, constants.R_OK)
    .then(() => resolve(newImage))
    .catch(() => {
      // Resize
      sharp(oldImage)
      .resize(width, height, { fit:  "contain" })
      .toFile(newImage, (err, info) => { 
        if (err) return reject(err)
        if (info) return resolve(newImage);
      });
    });
  });

}

export default resize;