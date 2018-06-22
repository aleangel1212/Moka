import { SELECT_STACK } from './types';

export const setStack = routerName => ({
	type: SELECT_STACK,
	payload: routerName,
});
