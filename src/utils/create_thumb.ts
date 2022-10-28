import sharp from 'sharp';
import { ASSETS_FULL_PATH, ASSETS_THUMB_PATH } from '../directory_constant';
import QueryParams from '../model/query_params';
async function CreateThumb(params: QueryParams) {
  // Configuring Preview Image
  return await sharp(ASSETS_FULL_PATH + params.filename + '.jpg')
    .resize(Number(params.width), Number(params.height))
    .jpeg({ quality: 80 })
    .toFile(ASSETS_THUMB_PATH + params.getThumbStr() + '.jpg');
}
export default CreateThumb;
