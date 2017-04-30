import photoCtrl from '../controllers/PostController'
import KoaRouter from 'koa-router';

const router = new KoaRouter();

router
	.get('/', photoCtrl.list)

export default router