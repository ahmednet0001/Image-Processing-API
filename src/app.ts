import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import QueryParams from './model/query_params';
import IsValid from './utils/check_params';
import FileExists from './utils/check_file_exist';
import CreateThumb from './utils/create_thumb';
import Query from './model/query';
import { ASSETS_THUMB_PATH } from './directory_constant';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/image', async (req: Request, res: Response) => {
  const query: Query = {
    filename: req.query.filename as string,
    width: req.query.width as string,
    height: req.query.height as string,
  };
  if (!req.query || IsValid(query) === false) {
    let msg = ' <br />Missing   param : [filename, height or width]<br />';
    msg += 'or invalid param value';

    res.send(`Error : ${msg}`).status(404);
    return;
  }
  // If valid params create param model
  const queryParams: QueryParams = new QueryParams(
    req.query.filename as string,
    req.query.width as string,
    req.query.height as string
  );

  // Check file exist
  let exist = await FileExists(queryParams.filename);
  if (!exist) {
    res.send('Error  : Image not exist ').status(404);
    return;
  }
  // Check thumbnail exist
  exist = await FileExists(queryParams.getThumbStr(), true);
  if (!exist) {
    // Create thumbnail
     await CreateThumb(queryParams);
  }
  // Get thumbnail to response
  const image = path.join(
    ASSETS_THUMB_PATH + queryParams.getThumbStr() + '.jpg'
  );
  res.sendFile(image);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
