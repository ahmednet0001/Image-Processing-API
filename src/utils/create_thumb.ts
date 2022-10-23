import sharp from 'sharp';
import QueryParams from '../model/query_params';
async function CreateThumb(params: QueryParams) {
  // Configuring Preview Image

 return await sharp(__dirname + '\\..\\/assets/full/' + params.filename + '.jpg')
    .resize(Number(params.width), Number(params.height))
    .jpeg({ quality: 80 })
    .toFile(__dirname + '\\..\\/assets/thumb/' + params.getThumbStr() + '.jpg');
}
export default CreateThumb;
