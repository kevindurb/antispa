import joi from 'joi';
import { Request } from 'express';
import { RedirectResponse } from '../RedirectResponse';
import { updateTodo } from '../gateways/todos';
import { TodoItem } from '../types/TodoItem';

const validator = joi.object({
  label: joi.string().min(1),
  due: joi.date().iso().min('now'),
});

export const handler = async (request: Request) => {
  const id: string = request.params.id;
  const data: Partial<TodoItem> = await validator.validateAsync(request.body);

  await updateTodo(id, data);
  return RedirectResponse.fromLocation('/');
};
