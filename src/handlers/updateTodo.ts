import { Request } from 'express';
import { RedirectResponse } from '../RedirectResponse';
import { updateTodo } from '../gateways/todos';

export const handler = async (request: Request) => {
  const id: string = request.params.id;
  await updateTodo(id, {
    label: request.body.label,
    due: request.body.due,
  });
  return RedirectResponse.fromLocation('/');
};
