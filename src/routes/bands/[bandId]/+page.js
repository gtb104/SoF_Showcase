import { bandsStore } from '$lib/stores/index.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    bandId: params.bandId
  };
}
