import joi from 'joi';
import { Request, Response } from 'express';
import { ResponseHandler } from './ResponseHandler';

type AsyncRequestHandler = (
  request: Request,
) => Promise<ResponseHandler | undefined>;

export const wrapHandler = (handler: AsyncRequestHandler) => async (
  request: Request,
  response: Response,
) => {
  try {
    const result = await handler(request);

    if (result) {
      return result.handleResponse(response);
    }

    response.status(200);
    response.end();
  } catch (e) {
    if (e instanceof joi.ValidationError) {
      response.status(400);
      response.json({
        message: e.message,
      });
    } else {
      console.error(e);
      response.status(500);
      response.end();
    }
  }
};
