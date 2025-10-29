// Application state
// There is a placeholder for a "special thanks" section at the bottom of the home page.
// This is optional, and is generally reserved for the band boosters to give an extra
// shout out.
const appState = {
	eventDate: new Date('November 1, 2025'),
	bandDirector: 'Jonathan Schiffler',
	principle: 'Tania N. Brown',
	specialThanks: ''
};

// Freedom HS Band Boosters
const boosters = {
	executiveBoard: [
		{ name: 'Jeff Kleinsmith', position: 'President' },
		{ name: 'Laura McGarry', position: 'VP Operations' },
		{ name: 'Peter Talton', position: 'VP Logistics' },
		{ name: 'Catalina Gomoloka', position: 'VP Colorguard' },
		{ name: 'Abe Al Saeed', position: 'VP Indoor Drumline' },
		{ name: 'James Gould', position: 'Treasurer' },
		{ name: 'Janelle Irrgang', position: 'Secretary' }
	],
	showcaseCoordinators: [
		'James Gould',
		'Steve Harding',
		'Jay Herrera',
		'Janelle Irrgang',
		'Megan Jacoby',
		'Emily Kleinsmith',
		'Jeff Kleinsmith',
		'Laura McGarry',
		'Carli Olivieri',
		'Natalie Perez',
		'Maria Ryan',
		'Greg Sheffler',
		'Erin Sterling',
		'Peter Talton',
		'Jennifer Wood'
	]
};

export { appState, boosters };
