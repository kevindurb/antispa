import { Request } from 'express';
import { RenderViewResponse } from '../RenderViewResponse';
import { getTodoItem } from '../gateways/todos';

export const handler = async (request: Request) => {
  const id: string = request.params.id;
  const todo = await getTodoItem(id);
  return RenderViewResponse.fromView('editPage', {
    todo,
  });
};
