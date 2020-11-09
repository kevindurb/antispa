import joi from 'joi';
import { Request } from 'express';
import { RedirectResponse } from '../RedirectResponse';
import { createTodo } from '../gateways/todos';
import { TodoItem } from '../types/TodoItem';

const validator = joi.object({
  label: joi.string().required().min(1),
  due: joi.date().min('now'),
});

export const handler = async (request: Request) => {
  const data: Partial<TodoItem> = await validator.validateAsync(request.body);

  await createTodo(data);
  return RedirectResponse.fromLocation('/');
};
