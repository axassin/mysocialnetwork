import postCtrl from '../controllers/PostController'
import KoaRouter from 'koa-router';
import jwt from '../middleware/jwt';

const router = new KoaRouter();

router
	.get('/', postCtrl.list)
	.post('/', postCtrl.add)
	.get('/:id', postCtrl.show)

export default router