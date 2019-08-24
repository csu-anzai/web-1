import { ThunkAction } from 'redux-thunk';

import { combineReducers } from 'redux';

import { Store } from '../store';

export type ThunkResult<R> = ThunkAction<R, Store, undefined, BaseAction<any>>;
export interface BaseAction<Payload> {
	type: string;
	payload?: Payload;
}

export interface IBaseAction<Payload> {
	type: string;
	payload?: Payload;
}

export default combineReducers({});
