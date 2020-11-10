import * as dateFns from 'date-fns';
import { v4 as uuid } from 'uuid';
import { getConnection } from './database';
import { TodoItem } from '../types/TodoItem';

export interface TodoItemsFilter {
  due?: Date | 'today';
  done?: boolean;
}

const buildDueFilter = (due: Date | 'today') =>
  due === 'today' ? 'now()' : dateFns.format(due, 'yyyy-MM-dd');

export const getTodoItem = (id: string): Promise<TodoItem> =>
  getConnection()
    .from('todoItems')
    .where('id', id)
    .limit(1)
    .then(
      (items) =>
        items.map((item) => ({
          ...item,
          done: !!item.done,
        }))[0],
    );

export const getNotDoneTodoItems = (filter?: TodoItemsFilter) =>
  getConnection()
    .from('todoItems')
    .where((builder) => {
      console.log(filter);
      if (filter?.due) {
        builder.where('due', buildDueFilter(filter.due));
      }

      if (filter && 'done' in filter) {
        builder.where('done', filter.done);
      }
    })
    .then((items) =>
      items.map((item) => ({
        ...item,
        done: !!item.done,
      })),
    );

export const createTodo = async (
  data: Partial<TodoItem>,
): Promise<TodoItem> => {
  const conn = getConnection();

  const todoItem: TodoItem = {
    id: uuid(),
    label: '',
    done: false,
    ...data,
    due: null,
  };
  await conn('todoItems').insert(todoItem);

  return todoItem;
};

export const markDone = async (id: string) =>
  getConnection()('todoItems').update({ done: true }).where('id', id);

export const updateTodo = async (id: string, data: Partial<TodoItem>) =>
  getConnection()('todoItems').update(data).where('id', id);
