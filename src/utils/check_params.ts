import validator from 'validator';

function IsValid(query: any): boolean {
  // Check if query exist
  if (!query) return false;
  // Fetch params
  const filename = query.filename;
  const width = query.width;
  const height = query.height;
  // Check if undefined param
  if (!filename) return false;
  if (!width) return false;
  if (!height) return false;
  // Check if name param

  if (validator.isEmpty(filename)) return false;
  // Check if width param

  if (validator.isEmpty(width) || !validator.isNumeric(width)) return false;
  // Check if height param

  if (validator.isEmpty(height) || !validator.isNumeric(height)) return false;

  return true;
}
export default IsValid;
