import { Request } from 'express';
import { RedirectResponse } from '../RedirectResponse';
import { createTodo } from '../gateways/todos';

export const handler = async (request: Request) => {
  await createTodo({
    label: request.body.label,
  });
  return RedirectResponse.fromLocation('/');
};
