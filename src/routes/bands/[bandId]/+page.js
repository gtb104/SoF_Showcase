import { bands } from '$lib/stores/bands.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		bandId: params.bandId
	};
}
