import { writable } from 'svelte/store';

const adjudicatorsStore = writable([
  {
    category: 'Ensemble Music',
    name: 'Jon Merritt'
  },
  {
    category: 'Individual Music',
    name: 'Chris Martin'
  },
  {
    category: 'Ensemble Visual',
    name: 'Christopher Rutt'
  },
  {
    category: 'Individual Visual',
    name: 'Paula Hales'
  },
  {
    category: 'GE Music',
    name: 'Tim Bray'
  },
  {
    category: 'GE Visual',
    name: 'Randall Brownlee'
  },
  {
    category: 'Color Guard',
    name: 'Katie Greene'
  },
  {
    category: 'Percussion',
    name: 'Michael Kirby'
  }
]);

export default adjudicatorsStore;
