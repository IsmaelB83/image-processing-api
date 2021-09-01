import express from 'express';
import { promises as fsPromises, constants } from 'fs';
import sharp from 'sharp';

const ERROR_MESSAGE = 'The following error ocurred processing your request';

const controller = async (req: express.Request, res: express.Response): Promise<any> => {   
  
  // Check mandatory fields
  const filename: string = req.query['filename'] as string;
  if (!filename)
    return res.status(401).send(`${ERROR_MESSAGE}: Image name is missing`);
  // Check image exists
  const originalImage: string = `/assets/${filename}`;
  try {
    await fsPromises.access(originalImage, constants.R_OK);
  } catch (error) {
    return res.status(401).send(`${ERROR_MESSAGE}: Image doesn't exists`);
  }  
  // Resize required ? 
  const width: number = parseInt(req.query['width'] as string);
  const height: number = parseInt(req.query['height'] as string);
  if (width && height) {
    try {
      const aux: Array<string> = filename.split('.');
      const newImage: string = `/assets/thumbnails/${aux[0]}_${width}x${height}.${aux[1]}`
      sharp(originalImage)
      .resize(width, height, { fit:  "contain" })
      .toFile(newImage, (err, info) => { 
        if (err) {
          return res.status(500).send(`${ERROR_MESSAGE}: Error trying to resize image ${err}`);
        }
        if (info) {
          return res.status(200).sendFile(newImage); 
        }
      });
    } catch (error) {
      return res.status(500).send(`${ERROR_MESSAGE}: Error trying to resize image ${error}`);
    }
  }
}

export default controller;