import path from 'path';
import { promises as Fs } from 'fs';
async function FileExists(filename: string, thumb = false) {
  // Determine path full or thumb
  const file = !thumb
    ? path.join(__dirname + '\\..\\/assets/full/' + filename + '.jpg')
    : path.join(__dirname + '\\..\\/assets/thumb/' + filename + '.jpg');
  try {
    await Fs.access(file);
    return true;
  } catch {
    return false;
  }
}
export default FileExists;
