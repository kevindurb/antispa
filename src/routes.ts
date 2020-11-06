import { Router } from 'express';
import { wrapHandler } from './asyncRequestHandler';

import { handler as indexPage } from './handlers/indexPage';
import { handler as editPage } from './handlers/editPage';

import { handler as createTodo } from './handlers/createTodo';
import { handler as markDone } from './handlers/markDone';
import { handler as updateTodo } from './handlers/updateTodo';

export const router = Router();

router.get('/', wrapHandler(indexPage));
router.get('/todos/:id', wrapHandler(editPage));

router.post('/todos', wrapHandler(createTodo));
router.post('/todos/:id/done', wrapHandler(markDone));
router.post('/todos/:id', wrapHandler(updateTodo));
