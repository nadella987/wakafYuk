import express from 'express';
import { onRequest } from 'firebase-functions/v2/https';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';

import { AppModule } from './app/app.module';

const server = express();

export const createNestServer = async (expressInstance: express.Express) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance)
  );

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  return app.init();
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch((err) => console.error('Nest broken', err));

// Connect express server to Firebase Functions
export const api = onRequest(
  {
    memory: '2GiB',
    timeoutSeconds: 600,
    region: 'asia-southeast2',
  },
  server
);
