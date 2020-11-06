import humps from 'humps';
import knex from 'knex';
import Knex from 'knex/types';
import path from 'path';

let connection: Knex;

export const getConnection = () => {
  if (!connection) {
    connection = knex({
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
    });
  }

  return connection;
};
