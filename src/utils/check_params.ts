import validator from 'validator';
import {  Request } from 'express';

function IsValid(req: Request) {
  // Check if query exist
  if (!req.query) return false;
  // Fetch params
  const filename = req.query.filename as string;
  const width = req.query.width as string;
  const height = req.query.height as string;
  // Check if undefined param
  if (!filename) return false;
  if (!width) return false;
  if (!height) return false;
  // Check  filename param
  if (validator.isEmpty(filename)) return false;
  // Check  width param
  if (validator.isEmpty(width) || !validator.isNumeric(width)) return false;
  // Check  height param
  if (validator.isEmpty(height) || !validator.isNumeric(height)) return false;

  return true;
}
export default IsValid;
