import KoaRouter from 'koa-router';
import authenticate from '../middleware/authentication';

const router = new KoaRouter();

router
	.post('/', authenticate)

export default router