# Image Processing API
 Building an API that can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping .
## Description
In this project, the server scales the image to be displayed according to the sizes required in the parameters `width` , `height` in the link.
http://localhost:38800/image?flilename=dasdasd&&width=300&&height=200
It creates a thumbnail of the image and saves it for further use.
You can change server port inside .env file `PORT=38800`
## Usage
To start server for nodemon
```
 npm run start
```
To build server for dist
```
 npm run build
```
To test
```
 npm run test
```
To formatting 
```
 npm run prettier
```
To linting for code errors
```
 npm run lnt
```


## TODO
1. <del>API endpoint test</del>
2. Create thumbnail test
3. <del> Documentation </del>

