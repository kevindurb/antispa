import * as dateFns from 'date-fns';
import { Request } from 'express';
import { RenderViewResponse } from '../RenderViewResponse';
import { getTodoItem } from '../gateways/todos';

export const handler = async (request: Request) => {
  const id: string = request.params.id;
  const todo = await getTodoItem(id);
  return RenderViewResponse.fromView('editPage', {
    todo: {
      ...todo,
      due: todo.due
        ? dateFns.formatISO(dateFns.fromUnixTime(todo.due / 1000), {
            representation: 'date',
          })
        : null,
    },
    today: dateFns.formatISO(new Date(), { representation: 'date' }),
  });
};
