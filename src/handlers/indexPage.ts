import { Request } from 'express';
import { RenderViewResponse } from '../RenderViewResponse';

export const handler = async (request: Request) => {
  return new RenderViewResponse('index', {
    title: 'hello',
    message: 'world',
  });
};
