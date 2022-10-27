import validator from 'validator';
import Query from '../model/query';

function IsValid(query: Query): boolean {
  // Fetch params
  const filename = query.filename as string;
  const width = query.width as string;
  const height = query.height as string;
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
