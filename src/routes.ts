import { Router } from 'express';
import { wrapHandler } from './asyncRequestHandler';

import { handler as indexPage } from './handlers/indexPage';

export const router = Router();

router.get('/', wrapHandler(indexPage));
