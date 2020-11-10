import joi from 'joi';
import * as dateFns from 'date-fns';
import { Request } from 'express';
import { RenderViewResponse } from '../RenderViewResponse';
import { getNotDoneTodoItems } from '../gateways/todos';
import { isEmpty } from '../lib/object';

const filterValidator = joi.object({
  due: [joi.date().iso(), joi.string().valid('today')],
  done: joi.boolean(),
});

const defaultFilter = {
  done: false,
};

export const handler = async (request: Request) => {
  const filter = await filterValidator.validateAsync(request.query);
  const todoItems = await getNotDoneTodoItems(
    isEmpty(filter) ? defaultFilter : filter,
  );
  return RenderViewResponse.fromView('todoList', {
    todoItems: todoItems.map((item) => ({
      ...item,
      due: item.due ? dateFns.formatISO(dateFns.fromUnixTime(item.due / 1000)) : null,
    })),
  });
};
