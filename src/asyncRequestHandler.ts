import { Request, Response } from 'express';
import { ResponseHandler } from './ResponseHandler';

type AsyncRequestHandler = (
  request: Request,
) => Promise<ResponseHandler | undefined>;

export const wrapHandler = (handler: AsyncRequestHandler) => async (
  request: Request,
  response: Response,
) => {
  const result = await handler(request);

  if (result) {
    return result.handleResponse(response);
  }

  response.sendStatus(200);
  response.end();
};
