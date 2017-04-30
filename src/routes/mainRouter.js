import postRouter from './PostRouter'
import KoaRouter from 'koa-router';

const router = new KoaRouter();

router.use('/api/posts', postRouter.routes())

export default router