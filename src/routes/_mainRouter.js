import postRouter from './PostRouter';
import userRouter from './UserRouter';
import authRouter from './AuthenticationRouter';
import KoaRouter from 'koa-router';

const router = new KoaRouter();

router.use('/api/posts', postRouter.routes());
// router.use('/api/users', userRouter.routes());
router.use('/api/login', authRouter.routes())

export default router