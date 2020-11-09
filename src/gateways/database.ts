import humps from 'humps';
import knex from 'knex';
import Knex from 'knex/types';
import path from 'path';
import { TodoItem } from '../types/TodoItem';

declare module 'knex/types/tables' {
  interface Tables {
    todoItems: TodoItem;
  }
}

let connection: Knex;

export const config: Knex.Config = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, '../../db.sqlite'),
  },
  postProcessResponse: (result) => {
    if (Array.isArray(result)) {
      return result.map((row) => humps.camelizeKeys(row));
    } else {
      return humps.camelizeKeys(result);
    }
  },
  wrapIdentifier: (value, origImpl) => origImpl(humps.decamelize(value)),
};

export const getConnection = () => {
  if (!connection) {
    connection = knex(config).on('query', console.log.bind(console));
  }

  return connection;
};
