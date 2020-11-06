import { Request } from 'express';
import { RenderViewResponse } from '../RenderViewResponse';
import { getNotDoneTodoItems } from '../gateways/todos';

export const handler = async (request: Request) => {
  const todoItems = await getNotDoneTodoItems();
  return RenderViewResponse.fromView('todoList', {
    todoItems,
  });
};
