import { Response } from 'express';
import { ResponseHandler } from './ResponseHandler';

export class RenderViewResponse extends ResponseHandler {
  private view: string;
  private options?: object;

  constructor(view: string, options?: object) {
    super();
    this.view = view;
    this.options = options;
  }

  static fromView(view: string, options?: object) {
    return new RenderViewResponse(view, options);
  }

  handleResponse(response: Response) {
    response.render(this.view, this.options);
  }
}
