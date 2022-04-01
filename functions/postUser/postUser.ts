import {NextFunction, Request, Response} from "express";

export {}
const express = require('express')
const {format} = require('date-fns')

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "Function from root!",
  });
});

app.post("/functiondos", (req: Request, res: Response, next: NextFunction) => {
  let dt = format(new Date(2014, 1, 11), 'yyyy-MM-dd')

  return res.status(200).json({
    message: "Function Two! " + dt,
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export default app


// export {}
//
// const {format} = require('date-fns')
// exports.handler = async function (event: any) {
//   try{
//     if(event.httpMethod == "GET"){
//       let dt = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//       return {
//         body: {
//           message: "This is Function! " + dt
//         }
//       }
//     }
//
//     if(event.httpMethod == "POST"){
//       if(!event.body){
//         return {
//           statusCode: 400,
//           headers: {},
//           body: "body has no content"
//         }
//       }
//
//       let letter = JSON.stringify(event.body)
//       return {
//         body: letter
//       }
//     }
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