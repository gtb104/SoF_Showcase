import { writable } from 'svelte/store';

// Store for bands data
export const bandsStore = writable([
  {
    id: "fluvanna",
    school: "Fluvanna County High School",
    name: "Marching Flucos",
    location: "Palmyra, VA",
    groupNumber: "Group 1",
    logoUrl: "/images/schools/fluvanna.webp",
    performance: "2:00 PM",
    productionName: "The Tell-Tale Heart",
    drumMajor: "Anna Broxon",
    director: "Samuel Campbell",
    songs: [
      { title: "'Lacrymosa' from Requiem in D Minor", composer: "Mozart"},
      { title: "Original Music", composer: "Chris Lamb"},
    ]
  },
  {
    id: "eastview",
    school: "Eastview High School",
    name: "Eastview Marching Band",
    location: "Eastview, TX",
    groupNumber: "Group 3",
    logoUrl: "/images/schools/eastview.png",
    performance: "11:00 AM",
    productionName: "Renaissance",
    drumMajor: "Elena Rodriguez",
    director: "Michael Torres",
    songs: [
      { title: "Carmina Burana", composer: "Carl Orff"},
      { title: "Adagio for Strings", composer: "Samuel Barber"},
      { title: "Spring (from The Four Seasons)", composer: "Antonio Vivaldi"}
    ]
  },
  {
    id: "westlake",
    school: "Westlake High School",
    name: "Westlake Marching Band",
    location: "Westlake, TX",
    groupNumber: "Group 3",
    logoUrl: "/images/schools/westlake.png",
    performance: "11:30 AM",
    productionName: "Urban Legends",
    drumMajor: "Marcus Wilson",
    director: "David Chen",
    songs: [
      { title: "Thriller", composer: "Michael Jackson, arr. J. Thompson"},
      { title: "Midnight in the City", composer: "Original by David Chen"},
      { title: "Urban Symphony No. 1", composer: "R. Mitchell"}
    ]
  },
  {
    id: "northridge",
    school: "Northridge High School",
    name: "Northridge Marching Knights",
    location: "Northridge, CA",
    groupNumber: "Group 2",
    logoUrl: "/images/schools/northridge.png",
    performance: "11:30 AM",
    productionName: "Constellations",
    drumMajor: "Tyler Johnson",
    director: "Sarah Miller",
    songs: [
      { title: "Jupiter (The Planets)", composer: "Gustav Holst"},
      { title: "Star Wars Main Theme", composer: "John Williams"},
      { title: "Space Odyssey", composer: "Original by Sarah Miller"}
    ]
  },
  {
    id: "southside",
    school: "Southside High School",
    name: "Southside Marching Storm",
    location: "Southside, FL",
    groupNumber: "Group 2",
    logoUrl: "/images/schools/southside.png",
    performance: "1:00 PM",
    productionName: "Reflections",
    drumMajor: "Jasmine Brooks",
    director: "Lisa Washington",
    songs: [
      { title: "Mirrors", composer: "Justin Timberlake, arr. L. Washington"},
      { title: "Reflection", composer: "Matthew Wilder & David Zippel"},
      { title: "Water Reflections", composer: "Original by T. Andrews"}
    ]
  },
  {
    id: "central",
    school: "Central High School",
    name: "Central Marching Wolves",
    location: "Central City, NY",
    groupNumber: "Group 3",
    logoUrl: "/images/schools/central.png",
    performance: "1:30 PM",
    productionName: "Elements",
    drumMajor: "Daniel Park",
    director: "Robert Kim",
    songs: [
      { title: "Ride of the Valkyries", composer: "Richard Wagner"},
      { title: "Firebird Suite", composer: "Igor Stravinsky"},
      { title: "La Mer", composer: "Claude Debussy"},
      { title: "Tornado", composer: "Original by S. Reynolds"}
    ]
  },
  {
    id: "freedom",
    school: "Freedom High School",
    name: "Spirit of Freedom",
    location: "Freedom, VA",
    groupNumber: "Exhibition",
    logoUrl: "/images/schools/freedom.png",
    performance: "2:30 PM",
    productionName: "American Spirit",
    drumMajor: "Sophia Mitchell",
    director: "Thomas Williams",
    songs: [
      { title: "America the Beautiful", composer: "Samuel A. Ward, arr. T. Williams"},
      { title: "Appalachian Spring", composer: "Aaron Copland"},
      { title: "Stars and Stripes Forever", composer: "John Philip Sousa"},
      { title: "Freedom's Call", composer: "Original by Thomas Williams"}
    ]
  }
]);

// Store for schedule data
export const scheduleStore = writable([
  {
    time: "9:00 AM",
    event: "Gates Open",
    description: "Welcome and registration begins"
  },
  {
    time: "10:00 AM",
    event: "Opening Ceremony",
    description: "Presentation of colors and national anthem"
  },
  {
    time: "11:00 AM",
    event: "First Performance",
    description: "Eastview Marching Band",
    bandId: "eastview"
  },
  {
    time: "11:30 AM",
    event: "Second Performance",
    description: "Northridge Marching Knights",
    bandId: "northridge"
  },
  {
    time: "12:00 PM",
    event: "Lunch Break",
    description: "Concessions open"
  },
  {
    time: "1:00 PM",
    event: "Third Performance",
    description: "Southside Marching Storm",
    bandId: "southside"
  },
  {
    time: "1:30 PM",
    event: "Fourth Performance",
    description: "Central Marching Wolves",
    bandId: "central"
  },
  {
    time: "2:00 PM",
    event: "Fifth Performance",
    description: "Marching Flucos",
    bandId: "fluvanna"
  },
  {
    time: "2:30 PM",
    event: "Exhibition Performance",
    description: "Spirit of Freedom",
    bandId: "freedom"
  },
  {
    time: "3:00 PM",
    event: "Awards Ceremony",
    description: "Presentation of awards and recognitions"
  },
  {
    time: "4:00 PM",
    event: "Event Conclusion",
    description: "Thank you for attending!"
  }
]);

// Store for adjudicators data
export const adjudicatorsStore = writable([
  {
    category: "Ensemble Music",
    name: "Mark Beamish"
  },
  {
    category: "Individual Music",
    name: "Chris Martin"
  },
  {
    category: "Ensemble Visual",
    name: "Greg Hamilton"
  },
  {
    category: "Individual Visual",
    name: "Jason Derting"
  },
  {
    category: "GE Music",
    name: "Tim Bray"
  },
  {
    category: "GE Visual",
    name: "Doug Casteen"
  },
  {
    category: "Color Guard",
    name: "Randall Brownlee"
  },
  {
    category: "Percussion",
    name: "Mike Kirby"
  }
]);

// Store for application state
export const appState = writable({
  eventDate: new Date("November 1, 2025"),
});
