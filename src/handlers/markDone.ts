import { Request } from 'express';
import { RedirectResponse } from '../RedirectResponse';
import { markDone } from '../gateways/todos';

export const handler = async (request: Request) => {
  await markDone(request.params.id);
  return RedirectResponse.fromLocation('/');
};
