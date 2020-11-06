import { Response } from 'express';
import { ResponseHandler } from './ResponseHandler';

export class JSONResponse extends ResponseHandler {
  private data: any;

  constructor(data: any) {
    super();
    this.data = data;
  }

  static fromData(data: any) {
    return new JSONResponse(data);
  }

  handleResponse(response: Response) {
    response.json(this.data);
  }
}
