import { IBaseAction, ThunkResult } from './index';

// event create
const EVENT_CREATE_INIT = '@beano/event/CREATE/INIT';
const EVENT_CREATE_SUCCESS = '@beano/event/CREATE/SUCCESS';
const EVENT_CREATE_ERROR = '@beano/event/CREATE/ERROR';

export interface IEventState {
	// array containing all the events
	all: IEvent[];

	// error state
	error?: string;

	// loading states
	loading: {
		create: boolean;
	};
}

const initial: IEventState = {
	all: [],
	loading: {
		create: false
	}
};

export default (
	state: IEventState = initial,
	action: IBaseAction<any>
): IEventState => {
	switch (action.type) {
		case EVENT_CREATE_INIT:
			return {
				...state,
				error: undefined,
				loading: {
					create: true
				}
			};
		case EVENT_CREATE_SUCCESS:
			const all = [...state.all];

			// push newly created event to array
			all.push(action.payload);

			return {
				...state,
				all,
				error: undefined,
				loading: {
					create: false
				}
			};

		case EVENT_CREATE_ERROR:
			return {
				...state,
				error: action.payload,
				loading: {
					create: false
				}
			};
		default:
			return state;
	}
};

export function create(
	data: IEventCreateData
): ThunkResult<Promise<IEventCreateResponse>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: EVENT_CREATE_INIT
		});

		try {
			// initiate api client
			const client = new EventAPI();
			const response = await client.createEvent(data);

			// we check if the response is an object to verify a success
			// backend throws a string as an error if anything goes wrong
			if (typeof response !== 'object') {
				throw Error(response);
			}

			dispatch({
				payload: response,
				type: EVENT_CREATE_SUCCESS
			});

			return response;
		} catch (e) {
			dispatch({
				payload: e.toString(),
				type: EVENT_CREATE_ERROR
			});

			return {} as IEventCreateResponse;
		}
	};
}
