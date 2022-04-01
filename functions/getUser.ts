import {NextFunction, Request, Response} from "express";

export {}
const express = require('express')
const {format} = require('date-fns')

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req: Request, res: Response, next: NextFunction) => {

  let dt = format(new Date(2014, 1, 11), 'yyyy-MM-dd')

  return res.status(200).json({
    message: "Hello from path!" + dt,
  });
});

app.post("/hello", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "Hello POST!",
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = app;

// exports.handler = async function (event: any) {
//   try{
//     if(event.httpMethod == "GET"){
//       let dt = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//       return {
//         body: {
//           message: "Hello from root! " + dt
//         }
//       }
//     }
//
//     return {
//       statusCode: 400,
//       headers: {},
//       body: "not GET/ request"
//     }
//   }catch (e){
//     return {
//       statusCode: 400,
//       headers: {},
//       body: JSON.stringify(e.stack || JSON.stringify(e, null, 2))
//     }
//   }
// };