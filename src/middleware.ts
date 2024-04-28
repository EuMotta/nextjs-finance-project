import { stackMiddlewares } from './middlewares/stackHandler';
import { auth } from './middlewares/withUser';

const middlewares = [auth];
export default stackMiddlewares(middlewares);
