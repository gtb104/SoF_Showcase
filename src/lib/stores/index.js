import { writable } from 'svelte/store';

// Store for application state
const appState = writable({
  eventDate: new Date('November 1, 2025'),
  specialThanks: 'Thanks to Manhattan Pizza for providing food for our hard-working volunteers!'
});

// Store for Freedom HS Band Boosters
const boostersStore = writable({
  executiveBoard: [
    { name: 'Jeff Kleinsmith', position: 'President' },
    { name: 'Emily Kleinsmith', position: 'VP Operations' },
    { name: 'Michael Henry', position: 'VP Logistics' },
    { name: 'Danielle Henry', position: 'VP Colorguard' },
    { name: 'Abe Al Saeed', position: 'VP Indoor Drumline' },
    { name: 'Becky Wilhelm', position: 'Treasurer' },
    { name: 'Janelle Irrgang', position: 'Secretary' }
  ],
  showcaseCoordinators: [
    'Jeff Kleinsmith', 'Mike Henry', 'Danielle Henry', 'Emily Kleinsmith',
    'Becky Wilhelm', 'Janelle Irrgang', 'Abe Al Saeed', 'Kristina Norman',
    'Jennifer Wood', 'Maria Ryan', 'Erin Sterling', 'Jay Herrera',
    'Megan Jacoby', 'Greg Sheffler', 'Tracy Griffe', 'Gene Griffe', 'Steve Harding'
  ]
});

export {
  appState,
  boostersStore
};
