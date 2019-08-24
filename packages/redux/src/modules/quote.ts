import { IBaseAction, ThunkResult } from './index';

const FETCH_TYPE_INIT = '@appmaven/quote/FETCH/TYPE/INIT';
const FETCH_TYPE_SUCCESS = '@beano/quote/FETCH/TYPE/SUCCESS';
const FETCH_TYPE_ERROR = '@beano/quote/FETCH/TYPE/ERROR';

const FETCH_LOGIN_INIT = '@appmaven/quote/FETCH/LOGIN/INIT';
const FETCH_LOGIN_SUCCESS = '@beano/quote/FETCH/LOGIN/SUCCESS';
const FETCH_LOGIN_ERROR = '@beano/quote/FETCH/LOGIN/ERROR';

const FETCH_BRANDING_INIT = '@appmaven/quote/FETCH/BRANDING/INIT';
const FETCH_BRANDING_SUCCESS = '@beano/quote/FETCH/BRANDING/SUCCESS';
const FETCH_BRANDING_ERROR = '@beano/quote/FETCH/BRANDING/ERROR';

const FETCH_PROFILES_INIT = '@appmaven/quote/FETCH/PROFILES/INIT';
const FETCH_PROFILES_SUCCESS = '@beano/quote/FETCH/PROFILES/SUCCESS';
const FETCH_PROFILES_ERROR = '@beano/quote/FETCH/PROFILES/ERROR';

const FETCH_UX_INIT = '@appmaven/quote/FETCH/UX/INIT';
const FETCH_UX_SUCCESS = '@beano/quote/FETCH/UX/SUCCESS';
const FETCH_UX_ERROR = '@beano/quote/FETCH/UX/ERROR';

const FETCH_INTEGRATION_INIT = '@appmaven/quote/FETCH/INTEGRATION/INIT';
const FETCH_INTEGRATION_SUCCESS = '@beano/quote/FETCH/INTEGRATION/SUCCESS';
const FETCH_INTEGRATION_ERROR = '@beano/quote/FETCH/INTEGRATION/ERROR';

const FETCH_RATINGS_INIT = '@appmaven/quote/FETCH/RATINGS/INIT';
const FETCH_RATINGS_SUCCESS = '@beano/quote/FETCH/RATINGS/SUCCESS';
const FETCH_RATINGS_ERROR = '@beano/quote/FETCH/RATINGS/ERROR';

const FETCH_PAYMENTS_INIT = '@appmaven/quote/FETCH/PAYMENTS/INIT';
const FETCH_PAYMENTS_SUCCESS = '@beano/quote/FETCH/PAYMENTS/SUCCESS';
const FETCH_PAYMENTS_ERROR = '@beano/quote/FETCH/PAYMENTS/ERROR';

const FETCH_DONE_INIT = '@appmaven/quote/FETCH/DONE/INIT';
const FETCH_DONE_SUCCESS = '@beano/quote/FETCH/DONE/SUCCESS';
const FETCH_DONE_ERROR = '@beano/quote/FETCH/DONE/ERROR';

export interface IQuote {
	title: string;
	subtitle: string;
	options: IOption[];
}

export interface IOption {
	image: string;
	title: string;
	price: number;
}

export interface IQuoteState {
	title: string;
	subtitle: string;
	options: IOption[];

	// error state
	error?: string;

	// loading states
	loading: boolean;
}

const initial: IQuoteState = {
	title: 'Test',
	subtitle: 'Subtitle',
	options: [],
	loading: false
};

export default (
	state: IQuoteState = initial,
	action: IBaseAction<any>
): IQuoteState => {
	switch (action.type) {
		case FETCH_TYPE_INIT:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case FETCH_TYPE_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				subtitle: action.payload.subtitle,
				options: action.payload.options,
				error: undefined,
				loading: false
			};
		case FETCH_TYPE_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case FETCH_LOGIN_INIT:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case FETCH_LOGIN_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				subtitle: action.payload.subtitle,
				options: action.payload.options,
				error: undefined,
				loading: false
			};
		case FETCH_LOGIN_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case FETCH_PROFILES_INIT:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case FETCH_PROFILES_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				subtitle: action.payload.subtitle,
				options: action.payload.options,
				error: undefined,
				loading: false
			};
		case FETCH_PROFILES_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case FETCH_PAYMENTS_INIT:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case FETCH_PAYMENTS_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				subtitle: action.payload.subtitle,
				options: action.payload.options,
				error: undefined,
				loading: false
			};
		case FETCH_PAYMENTS_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case FETCH_RATINGS_INIT:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case FETCH_RATINGS_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				subtitle: action.payload.subtitle,
				options: action.payload.options,
				error: undefined,
				loading: false
			};
		case FETCH_RATINGS_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case FETCH_UX_INIT:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case FETCH_UX_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				subtitle: action.payload.subtitle,
				options: action.payload.options,
				error: undefined,
				loading: false
			};
		case FETCH_UX_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case FETCH_INTEGRATION_INIT:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case FETCH_INTEGRATION_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				subtitle: action.payload.subtitle,
				options: action.payload.options,
				error: undefined,
				loading: false
			};
		case FETCH_INTEGRATION_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case FETCH_BRANDING_INIT:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case FETCH_BRANDING_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				subtitle: action.payload.subtitle,
				options: action.payload.options,
				error: undefined,
				loading: false
			};
		case FETCH_BRANDING_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case FETCH_DONE_INIT:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case FETCH_DONE_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				subtitle: action.payload.subtitle,
				options: action.payload.options,
				error: undefined,
				loading: false
			};
		case FETCH_DONE_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		default:
			return state;
	}
};

export function fetchType(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_TYPE_INIT
		});

		const response: IQuote = {
			title: 'What type of app are you building?',
			subtitle:
				'Apple iOS is a better choice to reach a more engaged user base. Android has a broader reach, however, particularly in emerging markets, like Asia and Africa.',
			options: [
				{
					title: 'Android',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/android-device-icon.png',
					price: 5000
				},
				{
					title: 'Apple iOS',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/iphone-icon.png',
					price: 5000
				},
				{
					title: 'Apple iOS and Android',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/ios-universal-icon.png',
					price: 16000
				}
			]
		};

		dispatch({
			payload: response,
			type: FETCH_TYPE_SUCCESS
		});

		return response;
	};
}

export function fetchLogin(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_LOGIN_INIT
		});

		const response: IQuote = {
			title: 'Do people have to login?',
			subtitle:
				'An email login is generally best to start with unless your app will have tight integration with services like Facebook or Twitter, in which case social login is better.',
			options: [
				{
					title: 'Email',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/email-login-icon.png',
					price: 2000
				},
				{
					title: 'Social',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/social-login-icon.png',
					price: 4000
				},
				{
					title: 'No',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/no-login-icon.png',
					price: 0
				},
				{
					title: "I don't know",
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/idk-login-icon.png',
					price: 0
				}
			]
		};

		dispatch({
			payload: response,
			type: FETCH_LOGIN_SUCCESS
		});

		return response;
	};
}

export function fetchProfiles(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_PROFILES_INIT
		});

		const response: IQuote = {
			title: 'Do people create personal profiles?',
			subtitle:
				'A profile means that some of the people that use your app will have to enter information about themselves that might be viewed publicly.',
			options: [
				{
					title: 'Yes',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/profile-icon.png',
					price: 5000
				},
				{
					title: 'No',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/no-profile-icon.png',
					price: 0
				},
				{
					title: "I don't know",
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/idk-profile-icon.png',
					price: 0
				}
			]
		};

		dispatch({
			payload: response,
			type: FETCH_PROFILES_SUCCESS
		});

		return response;
	};
}

export function fetchPayments(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_PAYMENTS_INIT
		});

		const response: IQuote = {
			title: 'How will you make money from your app?',
			subtitle:
				'Upfront cost is cheaper to build than in-app purchases but in-app purchase can produce higher returns if/when you have an engaged user base.',
			options: [
				{
					title: 'Upfront Cost',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/payments-icon.png',
					price: 0
				},
				{
					title: 'In-App Purchases',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/app-payments-icon.png',
					price: 4000
				},
				{
					title: 'Free',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/no-payments-icon.png',
					price: 0
				},
				{
					title: "I don't know",
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/idk-payments-icon.png',
					price: 0
				}
			]
		};

		dispatch({
			payload: response,
			type: FETCH_PAYMENTS_SUCCESS
		});

		return response;
	};
}

export function fetchRatings(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_RATINGS_INIT
		});

		const response: IQuote = {
			title: 'Do people rate or review things?',
			subtitle:
				'Keep in mind, ranking systems can vary in complexity and thus impact your budget.',
			options: [
				{
					title: 'Yes',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/ratings-icon.png',
					price: 5000
				},
				{
					title: 'No',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/no-ratings-icon.png',
					price: 0
				},
				{
					title: "I don't know",
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/idk-ratings-icon.png',
					price: 0
				}
			]
		};

		dispatch({
			payload: response,
			type: FETCH_RATINGS_SUCCESS
		});

		return response;
	};
}

export function fetchIntegration(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_INTEGRATION_INIT
		});

		const response: IQuote = {
			title: 'Does your app need to connect with your website?',
			subtitle:
				"This means you'll need to make an API(or Application Programming Interface.) It's how all your friendly apps talk to each other.",
			options: [
				{
					title: 'Yes',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/integrated-icon.png',
					price: 10000
				},
				{
					title: 'No',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/no-integrated-icon.png',
					price: 0
				},
				{
					title: "I don't know",
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/idk-integrated-icon.png',
					price: 0
				}
			]
		};

		dispatch({
			payload: response,
			type: FETCH_INTEGRATION_SUCCESS
		});

		return response;
	};
}

export function fetchUX(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_UX_INIT
		});

		const response: IQuote = {
			title: 'How nice should your app look?',
			subtitle:
				"Custom gestures, custom buttons, and custom transitions will cost you — it's not cheap being pretty.",
			options: [
				{
					title: 'Bare-bones',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/development-icon.png',
					price: 6000
				},
				{
					title: 'Stock',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/stock-interface-icon.png',
					price: 12500
				},
				{
					title: 'Beautiful',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/custom-new-interface-icon.png',
					price: 25000
				}
			]
		};

		dispatch({
			payload: response,
			type: FETCH_UX_SUCCESS
		});

		return response;
	};
}

export function fetchBranding(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_BRANDING_INIT
		});

		const response: IQuote = {
			title: 'Do you need an app icon?',
			subtitle:
				'Designing a quality app icon typically ranges from $500 - $2,000 but will help you stand out in the app store and on the device.',
			options: [
				{
					title: 'Yes',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/icon-icon.png',
					price: 2000
				},
				{
					title: 'No',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/no-icon-icon.png',
					price: 0
				},
				{
					title: "I don't know",
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/idk-icon-icon.png',
					price: 0
				}
			]
		};

		dispatch({
			payload: response,
			type: FETCH_BRANDING_SUCCESS
		});

		return response;
	};
}

export function fetchDone(price: number): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_DONE_INIT
		});

		const response: IQuote = {
			title: 'Your app estimate:',
			subtitle: '£' + price + ',00',
			options: []
		};

		dispatch({
			payload: response,
			type: FETCH_DONE_SUCCESS
		});

		return response;
	};
}
