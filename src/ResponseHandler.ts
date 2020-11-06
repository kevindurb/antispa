import { Response } from 'express';

export abstract class ResponseHandler {
  abstract handleResponse(response: Response): void;
}
