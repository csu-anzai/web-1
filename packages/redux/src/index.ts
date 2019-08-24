import {
	fetchBranding,
	fetchDone,
	fetchIntegration,
	fetchLogin,
	fetchPayments,
	fetchProfiles,
	fetchRatings,
	fetchType,
	fetchUX
} from './modules/quote';

export { default as getStores, IStore } from './store';

// Quote
export {
	IQuoteState,
	IOption,
	fetchBranding,
	fetchType,
	fetchProfiles,
	fetchUX,
	fetchLogin,
	fetchPayments,
	fetchRatings,
	fetchIntegration,
	fetchDone
} from './modules/quote';

export const quote = {
	type: fetchType,
	profiles: fetchProfiles,
	ux: fetchUX,
	login: fetchLogin,
	payments: fetchPayments,
	branding: fetchBranding,
	ratings: fetchRatings,
	integration: fetchIntegration,
	done: fetchDone
};
