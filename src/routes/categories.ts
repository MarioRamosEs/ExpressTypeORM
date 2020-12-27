import * as express from 'express';
import { getManager } from 'typeorm';
import { Category } from '../entity/Category';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response, next) => {
    const repo = getManager().getRepository(Category);
    const categories = await repo.find()
    res.send(categories)
});

export default router;