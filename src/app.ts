import express, { Express, query, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import QueryParams from './model/query_params'
import IsValid from './utils/check_params';
import FileExists from './utils/check_file_exist';
import CreateThumb from './utils/create_thumb';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.get('/image', async (req: Request, res: Response) => {
  if (IsValid(req.query) === false) {
    res.send('Invalid params');
    return;
  }
  // If valid params create param model 
  const queryParams:QueryParams=new QueryParams(
    req.query.filename as string,
    req.query.width as string,
    req.query.height as string
  );
   
  // Check file exist
  let exist = await FileExists(queryParams.filename);
  if (!exist) {
    res.send('Image not exist ');
    return;
  }
   // Check thumbnail exist
  exist = await FileExists(queryParams.getThumbStr(), true);
  if (!exist) {
    // Create thumbnail
   await CreateThumb(queryParams)
  }
  // Get thumbnail to response
  const x = path.join(__dirname + '/assets/thumb/'+queryParams.getThumbStr()+'.jpg');
  res.sendFile(x);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


export default app;