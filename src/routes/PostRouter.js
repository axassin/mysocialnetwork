import postCtrl from '../controllers/PostController'
import KoaRouter from 'koa-router';
import jwt from '../middleware/jwt';

const router = new KoaRouter();

router
	.get('/', jwt, postCtrl.list)
	.post('/', jwt, postCtrl.add)

export default router