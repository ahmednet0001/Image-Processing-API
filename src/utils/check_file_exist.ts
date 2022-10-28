import path from 'path';
import { promises as Fs } from 'fs';
import { ASSETS_FULL_PATH, ASSETS_THUMB_PATH } from '../directory_constant';
async function FileExists(filename: string, thumb = false): Promise<boolean> {
  // Determine path full or thumb
  const file = !thumb
    ? path.join(ASSETS_FULL_PATH + filename + '.jpg')
    : path.join(ASSETS_THUMB_PATH + filename + '.jpg');
  try {
    await Fs.access(file);
    return true;
  } catch {
    return false;
  }
}
export default FileExists;
