// Application state
const appState = {
  eventDate: new Date('November 1, 2025'),
  bandDirector: 'Jonathan Schiffler',
  principle: 'Tania N. Brown',
  specialThanks: 'Thanks to Manhattan Pizza for providing food for our hard-working volunteers!'
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
    'Jeff Kleinsmith', 'Mike Henry', 'Danielle Henry', 'Emily Kleinsmith',
    'Becky Wilhelm', 'Janelle Irrgang', 'Abe Al Saeed', 'Kristina Norman',
    'Jennifer Wood', 'Maria Ryan', 'Erin Sterling', 'Jay Herrera',
    'Megan Jacoby', 'Greg Sheffler', 'Tracy Griffe', 'Gene Griffe', 'Steve Harding'
  ]
};

export {
  appState,
  boosters
};
