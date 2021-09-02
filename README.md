# IMAGE-PROCESSING-API

This API is created for the first project of Udacity Full Stack JAvascript Nanodegree program.

This API can be used in two different ways. 
1) As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. 
2) The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. 
Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

## CONTENTS
- [DEPENDENCIES](#DEPENDENCIES)
- [DEPLOYMENT](#DEPLOYMENT)
  - [Download](#Download)
  - [Install dependencies](#Install-dependencies)
  - [Start application](#Start-application)
- [EXAMPLES](#EXAMPLES)
  
## DEPENDENCIES
This application makes use of the following packages

### Typescript
- "@types/express": "^4.17.13"
- "@types/jasmine": "^3.8.2"
- "@types/node": "^16.7.5"
- "@types/sharp": "^0.28.6"
- "@types/supertest": "^2.0.11"
- "@typescript-eslint/eslint-plugin": "^4.29.3"
- "@typescript-eslint/parser": "^4.29.3"
- "ts-node": "^10.2.1"
- "typescript": "^4.4.2"

### Code formating and eslint
- "eslint-config-airbnb-base": "^14.2.1"
- "eslint-plugin-import": "^2.24.2"
- "eslint": "^7.32.0"
- "prettier": "^2.3.2"

### Core modules
- "express": "^4.17.1"
- "sharp": "^0.29.0"
- "nodemon": "^2.0.12"

### Testing
    "jasmine": "^3.9.0",
    "jasmine-spec-reporter": "^7.0.0"
    "supertest": "^6.1.6

## DEPLOYMENT

### Download

To download the repository
```
\downloads\git clone https://github.com/IsmaelB83/image-processing-api.git
```

### Install dependencies

Install all the required npm packages both in backend and frontend folders
```
\downloads\image-processing-api\npm install
```

### Start application

Once everything is configured this is the order to start the application:
```
\downloads\keepcoding-wallaclone\backend\npm run deploy
```

## EXAMPLES

Find below some examples of API calls:
```
http://127.0.0.1:3000/images?filename=fjord.jpg&width=300&height=200
http://127.0.0.1:3000/images?filename=fjord.jpg
```