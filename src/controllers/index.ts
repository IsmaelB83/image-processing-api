// Node imports
import express from "express";
import { promises as fsPromises, constants } from "fs";
import path from "path";
// Own imports
import resize from "../utils";

const ERROR_MESSAGE = "The following error ocurred processing your request";
const IMAGES = path.join(__dirname, "../../public/assets/");

const controller = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response | void> => {
  // Get call parameters
  const filename: string = req.query["filename"] as string;
  const width: number = parseInt(req.query["width"] as string);
  const height: number = parseInt(req.query["height"] as string);

  // Check mandatory fields
  if (!filename)
    return res.status(401).send(`${ERROR_MESSAGE}: Image name is missing`);
  if ((width && !height) || (!width && height))
    return res
      .status(401)
      .send(
        `${ERROR_MESSAGE}: When thumbnail is required both width and height are mandatory`
      );

  // Check image exists
  const originalImage = `${IMAGES}${filename}`;
  try {
    // If not thumbnail required, return original image
    await fsPromises.access(originalImage, constants.R_OK);
    if (!width && !height) return res.status(200).sendFile(originalImage);
  } catch (error) {
    return res.status(404).send(`${ERROR_MESSAGE}: Image doesn't exists`);
  }

  // Request thumbnail
  resize(IMAGES, filename, width, height)
    .then((thumbnail) => {
      return res.status(200).sendFile(thumbnail);
    })
    .catch((error) => {
      return res
        .status(500)
        .send(`${ERROR_MESSAGE}: Error trying to resize image ${error}`);
    });
};

export default controller;
