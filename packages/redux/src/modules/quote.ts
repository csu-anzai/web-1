import { IBaseAction, ThunkResult } from './index';

// INIT
const FETCH_APP_INIT = '@appmaven/quote/FETCH/APP/INIT';
const FETCH_APP_SUCCESS = '@beano/quote/FETCH/APP/SUCCESS';
const FETCH_APP_ERROR = '@beano/quote/FETCH/APP/ERROR';

// WEB
const FETCH_WEB_INIT = '@appmaven/quote/FETCH/WEB/INIT';
const FETCH_WEB_SUCCESS = '@beano/quote/FETCH/WEB/SUCCESS';
const FETCH_WEB_ERROR = '@beano/quote/FETCH/WEB/ERROR';

// MOBILE
const FETCH_MOBILE_INIT = '@appmaven/quote/FETCH/MOBILE/INIT';
const FETCH_MOBILE_SUCCESS = '@beano/quote/FETCH/MOBILE/SUCCESS';
const FETCH_MOBILE_ERROR = '@beano/quote/FETCH/MOBILE/ERROR';

// DESKTOP
const FETCH_DESKTOP_INIT = '@appmaven/quote/FETCH/DESKTOP/INIT';
const FETCH_DESKTOP_SUCCESS = '@beano/quote/FETCH/DESKTOP/SUCCESS';
const FETCH_DESKTOP_ERROR = '@beano/quote/FETCH/DESKTOP/ERROR';

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
	title: '',
	subtitle: '',
	options: [],
	loading: false
};

export default (
	state: IQuoteState = initial,
	action: IBaseAction<any>
): IQuoteState => {
	switch (action.type) {
		case FETCH_APP_INIT:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case FETCH_APP_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				subtitle: action.payload.subtitle,
				options: action.payload.options,
				error: undefined,
				loading: false
			};
		case FETCH_APP_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case FETCH_MOBILE_INIT:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case FETCH_MOBILE_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				subtitle: action.payload.subtitle,
				options: action.payload.options,
				error: undefined,
				loading: false
			};
		case FETCH_MOBILE_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case FETCH_WEB_INIT:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case FETCH_WEB_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				subtitle: action.payload.subtitle,
				options: action.payload.options,
				error: undefined,
				loading: false
			};
		case FETCH_WEB_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case FETCH_DESKTOP_INIT:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case FETCH_DESKTOP_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				subtitle: action.payload.subtitle,
				options: action.payload.options,
				error: undefined,
				loading: false
			};
		case FETCH_DESKTOP_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		default:
			return state;
	}
};

export function fetchApp(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_APP_INIT
		});

		const response: IQuote = {
			title: 'What type of platform are you building for?',
			subtitle:
				'Have you ever wondered how much it would cost to make a website, mobile or desktop application? This handy app cost calculator will help you.',
			options: [
				{
					title: 'Web',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/android-device-icon.png',
					price: 1000
				},
				{
					title: 'Mobile',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/iphone-icon.png',
					price: 2000
				},
				{
					title: 'Desktop',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/ios-universal-icon.png',
					price: 2500
				}
			]
		};

		dispatch({
			payload: response,
			type: FETCH_APP_SUCCESS
		});

		return response;
	};
}

// WEB

export function fetchWebMarketing(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_WEB_INIT
		});

		const response: IQuote = {
			title: 'How many marketing pages will you need?',
			subtitle:
				'ie. how it works, contact us, team, about, press, terms, FAQ, hiring',
			options: [
				{
					title: '1 to 3',
					image:
						'http://howmuchdoesawebsiteco.st/img/hmdawc/icons/pages-one-icon.png',
					price: 1000
				},
				{
					title: '4 to 9',
					image:
						'http://howmuchdoesawebsiteco.st/img/hmdawc/icons/pages-four-icon.png',
					price: 2000
				},
				{
					title: '10+',
					image:
						'http://howmuchdoesawebsiteco.st/img/hmdawc/icons/pages-ten-icon.png',
					price: 3000
				},
				{
					title: "None / I don't know",
					image:
						'http://howmuchdoesawebsiteco.st/img/hmdawc/icons/pages-idk-icon.png',
					price: 0
				}
			]
		};

		dispatch({
			payload: response,
			type: FETCH_WEB_SUCCESS
		});

		return response;
	};
}

export function fetchWebLogin(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_WEB_INIT
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
			type: FETCH_WEB_SUCCESS
		});

		return response;
	};
}

export function fetchWebProfiles(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_WEB_INIT
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
			type: FETCH_WEB_SUCCESS
		});

		return response;
	};
}

export function fetchWebPayments(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_WEB_INIT
		});

		const response: IQuote = {
			title: 'Will you need to accept payments?',
			subtitle: 'Accept credit cards, PayPal, Bitcoin.',
			options: [
				{
					title: 'Yes',
					image:
						'http://howmuchtomakeanapp.com/img/hmtmaa/icons/payments-icon.png',
					price: 5000
				},
				{
					title: 'No',
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
			type: FETCH_WEB_SUCCESS
		});

		return response;
	};
}

export function fetchWebRatings(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_WEB_INIT
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
			type: FETCH_WEB_SUCCESS
		});

		return response;
	};
}

export function fetchWebIntegration(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_WEB_INIT
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
			type: FETCH_WEB_SUCCESS
		});

		return response;
	};
}

export function fetchWebSearch(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_WEB_INIT
		});

		const response: IQuote = {
			title: 'Does your website need search?',
			subtitle:
				'The cost to build a search function can vary greatly. The price given here is an average for search integration based on basic tagging. Not Google.',
			options: [
				{
					title: 'Yes',
					image:
						'http://howmuchdoesawebsiteco.st/img/hmdawc/icons/search-icon.png',
					price: 6000
				},
				{
					title: 'No',
					image:
						'http://howmuchdoesawebsiteco.st/img/hmdawc/icons/search-no-icon.png',
					price: 0
				},
				{
					title: "I don't know",
					image:
						'http://howmuchdoesawebsiteco.st/img/hmdawc/icons/search-idk-icon.png',
					price: 0
				}
			]
		};

		dispatch({
			payload: response,
			type: FETCH_WEB_SUCCESS
		});

		return response;
	};
}

export function fetchWebCMS(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_WEB_INIT
		});

		const response: IQuote = {
			title: 'Do you need a Content Management System (CMS)?',
			subtitle:
				'A CMS will let you update content on your site without writing code (i.e. a blog).',
			options: [
				{
					title: 'Yes',
					image:
						'http://howmuchdoesawebsiteco.st/img/hmdawc/icons/cms-icon.png',
					price: 4000
				},
				{
					title: 'No',
					image:
						'http://howmuchdoesawebsiteco.st/img/hmdawc/icons/cms-no-icon.png',
					price: 0
				},
				{
					title: "I don't know",
					image:
						'http://howmuchdoesawebsiteco.st/img/hmdawc/icons/cms-idk-icon.png',
					price: 0
				}
			]
		};

		dispatch({
			payload: response,
			type: FETCH_WEB_SUCCESS
		});

		return response;
	};
}

// MOBILE

export function fetchMobileType(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_MOBILE_INIT
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
			type: FETCH_MOBILE_SUCCESS
		});

		return response;
	};
}

export function fetchMobileLogin(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_MOBILE_INIT
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
			type: FETCH_MOBILE_SUCCESS
		});

		return response;
	};
}

export function fetchMobileProfiles(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_MOBILE_INIT
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
			type: FETCH_MOBILE_SUCCESS
		});

		return response;
	};
}

export function fetchMobilePayments(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_MOBILE_INIT
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
			type: FETCH_MOBILE_SUCCESS
		});

		return response;
	};
}

export function fetchMobileRatings(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_MOBILE_INIT
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
			type: FETCH_MOBILE_SUCCESS
		});

		return response;
	};
}

export function fetchMobileIntegration(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_MOBILE_INIT
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
			type: FETCH_MOBILE_SUCCESS
		});

		return response;
	};
}

export function fetchMobileUX(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_MOBILE_INIT
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
			type: FETCH_MOBILE_SUCCESS
		});

		return response;
	};
}

export function fetchMobileBranding(): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_MOBILE_INIT
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
			type: FETCH_MOBILE_SUCCESS
		});

		return response;
	};
}

export function fetchDone(price: number): ThunkResult<Promise<IQuote>> {
	return async dispatch => {
		// initiate request
		dispatch({
			type: FETCH_APP_INIT
		});

		const response: IQuote = {
			title: 'Your app estimate:',
			subtitle: '£' + price + ',00',
			options: []
		};

		dispatch({
			payload: response,
			type: FETCH_APP_SUCCESS
		});

		return response;
	};
}
