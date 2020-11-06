import { Response } from 'express';
import { ResponseHandler } from './ResponseHandler';

export class RedirectResponse extends ResponseHandler {
  private location: string;

  constructor(location: string) {
    super();
    this.location = location;
  }

  static fromLocation(location: string) {
    return new RedirectResponse(location);
  }

  handleResponse(response: Response) {
    response.redirect(this.location);
  }
}
