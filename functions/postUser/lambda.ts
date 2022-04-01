import * as awsServerlessExpress from 'aws-serverless-express';
import app from './postUser';

const binaryMimeTypes = [
  // 'application/javascript',
  // 'application/json',
  // 'application/octet-stream',
  // 'application/xml',
  // 'font/eot',
  // 'font/opentype',
  // 'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  // 'text/comma-separated-values',
  // 'text/css',
  // 'text/html',
  // 'text/javascript',
  // 'text/plain',
  // 'text/text',
  // 'text/xml'
]

// @ts-ignore
const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);

export const handler = (event: any, context: any) => awsServerlessExpress.proxy(server, event, context);
