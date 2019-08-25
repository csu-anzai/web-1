import {
	fetchApp,
	fetchDone,
	fetchMobileBranding,
	fetchMobileIntegration,
	fetchMobileLogin,
	fetchMobilePayments,
	fetchMobileProfiles,
	fetchMobileRatings,
	fetchMobileType,
	fetchMobileUX,
	fetchWebCMS,
	fetchWebIntegration,
	fetchWebLogin,
	fetchWebMarketing,
	fetchWebPayments,
	fetchWebProfiles,
	fetchWebRatings,
	fetchWebSearch
} from './modules/quote';

export { default as getStores, IStore } from './store';

// Quote
export {
	IQuoteState,
	IOption,
	fetchMobileBranding,
	fetchMobileType,
	fetchMobileProfiles,
	fetchMobileUX,
	fetchMobileLogin,
	fetchMobilePayments,
	fetchMobileRatings,
	fetchMobileIntegration,
	fetchWebMarketing,
	fetchWebProfiles,
	fetchWebLogin,
	fetchWebPayments,
	fetchWebRatings,
	fetchWebIntegration,
	fetchWebSearch,
	fetchWebCMS,
	fetchDone,
	fetchApp
} from './modules/quote';

export const quote = {
	mobileType: fetchMobileType,
	mobileProfiles: fetchMobileProfiles,
	mobileUX: fetchMobileUX,
	mobileLogin: fetchMobileLogin,
	mobilePayments: fetchMobilePayments,
	mobileBranding: fetchMobileBranding,
	mobileRatings: fetchMobileRatings,
	mobileIntegration: fetchMobileIntegration,

	webCMS: fetchWebCMS,
	webSearch: fetchWebSearch,
	webProfiles: fetchWebProfiles,
	webMarketing: fetchWebMarketing,
	webLogin: fetchWebLogin,
	webPayments: fetchWebPayments,
	webRatings: fetchWebRatings,
	webIntegration: fetchWebIntegration,

	done: fetchDone,
	app: fetchApp
};
