import { ThunkAction } from 'redux-thunk';

import { combineReducers } from 'redux';

import { IStore } from '../store';

import quote from './quote';

export type ThunkResult<R> = ThunkAction<
	R,
	IStore,
	undefined,
	IBaseAction<any>
>;
export interface IBaseAction<Payload> {
	type: string;
	payload?: Payload;
}

export default combineReducers({
	quote
});
