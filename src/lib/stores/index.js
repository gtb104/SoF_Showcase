import { writable } from 'svelte/store';

// Store for application state
export const appState = writable({
	eventDate: new Date('November 1, 2025')
});

// Store for bands data
export const bandsStore = writable([
	{
		id: 'fluvanna',
		school: 'Fluvanna County High School',
		name: 'Marching Flucos',
		location: 'Palmyra, VA',
		groupNumber: 'Group 1',
		logoUrl: '/images/schools/fluvanna.webp',
		productionName: 'The Tell-Tale Heart',
		drumMajors: ['Anna Broxon'],
		directors: ['Samuel Campbell'],
		songs: [
			{ title: "'Lacrymosa' from Requiem in D Minor", composer: 'Mozart' },
			{ title: 'Original Music', composer: 'Chris Lamb' }
		]
	},
	{
		id: 'caroline',
		school: 'Caroline High School',
		name: 'Marching Cavaliers',
		location: 'Milford, VA',
		groupNumber: 'Group 1',
		logoUrl: '/images/schools/caroline.png',
		productionName: 'Down at the Sock-Hop',
		drumMajors: ['Kasey Carroll'],
		directors: ['Zachary Freshwater'],
		songs: [
			{ title: "50's Do-Wop", composer: 'Barry Hurt' },
			{ title: 'Slow Dancing in Gym', composer: 'Barry Hurt' },
			{ title: 'Friday Night Cruisin', composer: 'Barry Hurt' }
		]
	},
	{
		id: 'spotswood',
		school: 'Spotswood High School',
		name: 'Marching Trailblazers',
		location: 'Penn Laird, VA',
		groupNumber: 'Group 1',
		logoUrl: '/images/schools/spotswood.png',
		productionName: 'Enter the Galaxies',
		drumMajors: ['Danny Gass'],
		directors: ['Sean Macoumber'],
		songs: [
			{ title: 'Enter The Galaxies', composer: 'Paul Lovatt-Cooper' },
			{ title: 'The Dark Side of the Moon', composer: 'Paul Lovatt-Cooper' }
		]
	},
	{
		id: 'skyline',
		school: 'Skyline High School',
		name: 'Marching Hawks',
		location: 'Front Royal, VA',
		groupNumber: 'Group 1',
		logoUrl: '/images/schools/skyline.png',
		productionName: 'Something Wicked in the Woods',
		drumMajors: ['Annika Jensen'],
		directors: ['Daniel Holland'],
		songs: [
			{ title: 'Danse Macabre', composer: 'Camille Saint-Saens' },
			{ title: 'My Immortal', composer: 'Evanescence' },
			{ title: 'Paint it Black', composer: 'The Rolling Stones' }
		]
	},
	{
		id: 'edison',
		school: 'Thomas Edison High School',
		name: 'Eagle Marching Band',
		location: 'Alexandria, VA',
		groupNumber: 'Group 1',
		logoUrl: '/images/schools/edison.png',
		productionName: 'Into the Cosmos',
		drumMajors: ['Viola Howden'],
		directors: ['Charlie J. Mitchell'],
		songs: [
			{ title: 'Movement 1', composer: 'Unlisted' },
			{ title: 'Movement 2', composer: 'Unlisted' },
			{ title: 'Movement 3', composer: 'Unlisted' }
		]
	},
	{
		id: 'strasburg',
		school: 'Strasburg High School',
		name: 'Purple Regiment',
		location: 'Strasburg, VA',
		groupNumber: 'Group 1',
		logoUrl: '/images/schools/strasburg.png',
		productionName: 'On the Road',
		drumMajors: ['Ruby Lichens', 'Gabe Bowen'],
		directors: ['Devin Esleck'],
		songs: [
			{ title: 'Caravan', composer: 'Duke Ellington/arr. Nick Barrett' },
			{ title: 'Rhapsody in Blue', composer: 'George Gershwin/arr. Dallas Burke' },
			{ title: 'Blue Skies', composer: 'Irving Berlin/arr. Dave Henning' }
		]
	},
	{
		id: 'culpeper',
		school: 'Culpeper County High School',
		name: 'Marching Blue Devils',
		location: 'Culpeper, VA',
		groupNumber: 'Group 2',
		logoUrl: '/images/schools/culpeper.png',
		productionName: 'Mysteria Noir',
		drumMajors: ['Elle Crosley'],
		directors: ['Nathan Vaughn-Childs'],
		songs: [
			{ title: 'St Louis Blues', composer: 'Unlisted' },
			{ title: 'Rhapsody in Blue', composer: 'Unlisted' },
			{ title: 'Paranoia', composer: 'Unlisted' },
			{ title: 'Skyfall', composer: 'Unlisted' },
			{ title: 'O Fortuna', composer: 'Unlisted' },
			{ title: 'Piano Concerto No. 2', composer: 'Rachmaninoff' },
			{ title: 'Right Now', composer: 'Unlisted' }
		]
	},
	{
		id: 'landstown',
		school: 'Landstown High School',
		name: 'Marching Eagles',
		location: 'Virginia Beach, VA',
		groupNumber: 'Group 2',
		logoUrl: '/images/schools/landstown.png',
		productionName: 'Shadow Dances',
		drumMajors: ['Lilly Phelps', 'Jayden Windley', 'Leah Davis'],
		directors: ['Jamie Tucker'],
		songs: [
			{ title: 'Shadow Rituals', composer: 'Michael Markowski' },
			{ title: 'New World', composer: 'Bjork' },
			{ title: 'Original Music', composer: 'Justin Ratcliff' }
		]
	},
	{
		id: 'tuscarora',
		school: 'Tuscarora High School',
		name: 'Marching Huskies',
		location: 'Leesburg, VA',
		groupNumber: 'Group 2',
		logoUrl: '/images/schools/tuscarora.png',
		productionName: 'Dreamscape',
		drumMajors: ['Dexter Wilkinson'],
		directors: ['McKenzie Durgin'],
		songs: [
			{ title: 'Lingus', composer: 'Snarky Puppy' },
			{ title: 'The World is Getting Smaller', composer: 'Snarky Puppy' },
			{ title: 'Fly Me to the Moon', composer: 'arr. Arboldea/Steel' }
		]
	},
	{
		id: 'turnerashby',
		school: 'Turner Ashby High School',
		name: 'Marching Knights',
		location: 'Bridgewater, VA',
		groupNumber: 'Group 2',
		logoUrl: '/images/schools/turnerashby.png',
		productionName: 'Together We Can!',
		drumMajors: ['Laney Eye'],
		directors: ['Rob Nash'],
		songs: [
			{ title: 'I. Revival', composer: 'Unlisted' },
			{ title: 'II. Stronger Together', composer: 'Unlisted' },
			{ title: 'III. Progress', composer: 'Unlisted' },
			{ title: 'IV. Triumph', composer: 'Unlisted' }
		]
	},
	{
		id: 'clarkecounty',
		school: 'Clarke County High School',
		name: "Screamin' Eagles",
		location: 'Berryville, VA',
		groupNumber: 'Group 2',
		logoUrl: '/images/schools/clarkecounty.png',
		productionName: 'Good vs Evil',
		drumMajors: ['Roselyne Kutai'],
		directors: ['Mark Curry'],
		songs: [{ title: 'Angels and Demons', composer: 'Randall Standridge' }]
	},
	{
		id: 'yorktown',
		school: 'Yorktown High School',
		name: 'Yorktown Marching Band',
		location: 'Arlington, VA',
		groupNumber: 'Group 3',
		logoUrl: '/images/schools/yorktown.png',
		productionName: 'Let it Be',
		drumMajors: ['Claire Huskey'],
		directors: ['Joseph Witkowski'],
		songs: [{ title: 'Let it Be and other music inspired by The Beatles', composer: 'The Beatles' }]
	},
	{
		id: 'princessanne',
		school: 'Princess Anne High School',
		name: 'Fabulous Marching Cavaliers',
		location: 'Virginia Beach, VA',
		groupNumber: 'Group 3',
		logoUrl: '/images/schools/princessanne.png',
		productionName: 'Bazaar Harmonies',
		drumMajors: ['Alex Viado'],
		directors: ['John Boyd'],
		songs: [
			{
				title: 'Selections',
				composer: 'Samuel Hazo, Etienne Crausaz, Ennio Morricone, and Camille Saint-Saens'
			}
		]
	},
	{
		id: 'marshall',
		school: 'George C. Marshall High School',
		name: 'Marching Statesmen',
		location: 'Falls Church, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/marshall.png',
		productionName: 'Anomaly',
		drumMajors: ['Victor Wang', 'Lydia Wilder'],
		directors: ['Paul Vesilind'],
		songs: [{ title: 'Unlisted', composer: 'Unlisted' }]
	},
	{
		id: 'osbournpark',
		school: 'Osbourn Park High School',
		name: 'Marching Yellow Jackets',
		location: 'Manassas, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/osbournpark.png',
		productionName: 'Goodnight, My Angel',
		drumMajors: ['Aiden Goto'],
		directors: ['Ashley Radabaugh'],
		songs: [
			{ title: 'Lullabye (Goodnight, My Angel)', composer: 'Billy Joel' },
			{ title: 'Sweet Dreams', composer: 'Eurythmics' },
			{ title: 'Symphonie Fantastique Mvt 5', composer: 'Berlioz' },
			{ title: 'Among the Clouds', composer: 'Brian Balmages' }
		]
	},
	{
		id: 'rockridge',
		school: 'Rock Ridge High School',
		name: 'Outdoor Performance Ensemble',
		location: 'Ashburn, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/rockridge.png',
		productionName: 'Stargazing',
		drumMajors: ['Ragya Verma', 'Karris Huang', 'Maanu Karthikeyan', 'Risha Varma'],
		directors: ['Justin D. Ratcliff'],
		songs: [
			{ title: 'White Lotus-Renaissance', composer: 'Unlisted' },
			{ title: 'Confutadis Maladictus', composer: 'Unlisted' },
			{ title: 'Love in the dark', composer: 'Unlisted' },
			{ title: 'Starry night', composer: 'Unlisted' },
			{ title: 'Twinkle Twinkle Little Star', composer: 'Unlisted' },
			{ title: 'Blue Shades', composer: 'Unlisted' }
		]
	},
	{
		id: 'dominion',
		school: 'Dominion High School',
		name: 'Marching Titans',
		location: 'Sterling, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/dominion.png',
		productionName: 'SANDscapes',
		drumMajors: ['Adithi Selvamohan'],
		directors: ['Gary English'],
		songs: [
			{ title: 'Scheherazade', composer: 'Nicolai Rimsky-Korsakov' },
			{ title: 'Theme from Lawrence of Arabia', composer: 'Maurice Jarre' },
			{
				title: 'One Night in Bangkok (from Chess)',
				composer: 'Benny Andersson/Bjorn Ulvaeus/Tim Rice'
			}
		]
	},
	{
		id: 'riverside',
		school: 'Riverside High School',
		name: 'Marching Rams',
		location: 'Leesburg, VA',
		groupNumber: 'Group 5',
		logoUrl: '/images/schools/riverside.png',
		productionName: "A Hero's Journey",
		drumMajors: ['Sadie Innerst', 'Katarina Walordy'],
		directors: ['Bram Smith'],
		songs: [{ title: 'Unlisted', composer: 'Unlisted' }]
	},
	{
		id: 'jeffersonforest',
		school: 'Jefferson Forest High School',
		name: 'Marching Cavaliers',
		location: 'Forest, VA',
		groupNumber: 'Group 5',
		logoUrl: '/images/schools/jeffersonforest.png',
		productionName: 'Parkour',
		drumMajors: ['Jaxon Jones', 'Saxton Schmal'],
		directors: ['David Webb'],
		songs: [
			{ title: 'Lost It To Trying', composer: 'Son Lux' },
			{ title: 'Shofukan', composer: 'Snarky Puppy' },
			{ title: 'Forty Six and 2', composer: 'Tool' }
		]
	},
	{
		id: 'westpotomac',
		school: 'West Potomac High School',
		name: 'Marching Wolverines',
		location: 'Alexandria, VA',
		groupNumber: 'Group 5',
		logoUrl: '/images/schools/westpotomac.png',
		productionName: 'Write Me A Show!',
		drumMajors: ['Amaya Guess', 'Delia Scott'],
		directors: ['Joe Antonucci'],
		songs: [
			{ title: 'Original Music', composer: 'Unlisted' },
			{ title: 'Hymn to a Blue Hour', composer: 'Unlisted' },
			{ title: 'Eleanor Rigby', composer: 'Unlisted' }
		]
	},
	{
		id: 'tjhsst',
		school: 'Thomas Jefferson HSST',
		name: 'Marching Colonials',
		location: 'Alexandria, VA',
		groupNumber: 'Group 6',
		logoUrl: '/images/schools/tjhsst.png',
		productionName: 'Adventure is Out There',
		drumMajors: ['Grace Bai', 'Hudson Keeler'],
		directors: ['Steve Ballard'],
		songs: [
			{ title: 'The Chairman Dances', composer: 'John Adams' },
			{
				title: 'Carl Goes Up, Memories Can Weigh You Down, and Stuff We Did',
				composer: 'Michael Giacchino'
			}
		]
	},
	{
		id: 'johnchampe',
		school: 'John Champe High School',
		name: 'Marching Knights',
		location: 'Aldie, VA',
		groupNumber: 'Group 6',
		logoUrl: '/images/schools/johnchampe.png',
		productionName: 'The Abyss',
		drumMajors: ['Ethan Kim', 'Jaime Kwon', 'Parneet Virk'],
		directors: ['Adam Foreman', 'Jason Miller'],
		songs: [
			{ title: 'Making Water', composer: 'Gregson-Williams' },
			{ title: "Fingal's Cave Overture", composer: 'Mendelssohn' },
			{ title: 'Vertigo Prelude and Rooftop', composer: 'Herrman' },
			{ title: 'Isengard Unleashed', composer: 'Shore' },
			{ title: 'Finale from "They Abyss"', composer: 'Silvestri' }
		]
	},
	{
		id: 'independence',
		school: 'Independence High School',
		name: 'Independence Marching Band',
		location: 'Ashburn, VA',
		groupNumber: 'Group 6',
		logoUrl: '/images/schools/independence.png',
		productionName: 'Re-wired',
		drumMajors: ['Daniel Kim', 'Sahasra Mogulla'],
		directors: ['Kyle Harrington', 'Amanda Young'],
		songs: [
			{ title: 'Caves', composer: 'Cody Fry' },
			{ title: 'At The End of the Rainbow', composer: 'Richard Saucedo' },
			{ title: 'I Carry Your Heart With Me', composer: 'Rasmus Krigstrom' },
			{ title: 'The Kings Affirmation', composer: 'Aniko' }
		]
	},
	{
		id: 'freedom',
		school: 'Freedom High School',
		name: 'Spirit of Freedom',
		location: 'South Riding, VA',
		groupNumber: 'Exhibition',
		logoUrl: '/images/schools/freedom.png',
		productionName: 'Forest for the Trees',
		drumMajors: ['Aphomya Behre', 'Amritha Vure', 'Abby Keenan'],
		directors: ['Jonathan Schiffler'],
		songs: [
			{ title: 'Lunch with the King', composer: 'Thomas Newman' },
			{ title: 'In Paradisum', composer: 'Frank Peterson and Sarah Brightman' },
			{ title: 'Road to Chicago', composer: 'Thomas Newman' },
			{ title: 'Original music', composer: 'William Pitts' }
		]
	}
]);

// Store for schedule data
export const scheduleStore = writable([
	{
		group: 'Morning',
		events: [
			{
				time: '9:00 AM',
				description: 'Gates open'
			},
			{
				time: '10:00 AM',
				description: 'Opening ceremony'
			}
		]
	},
	{
		group: 'Group 1',
		events: [
			{
				time: '2:00 PM',
				description: 'Fluvanna County HS',
				bandId: 'fluvanna'
			},
			{
				time: '2:15 PM',
				description: 'Caroline HS',
				bandId: 'caroline'
			},
			{
				time: '2:30 PM',
				description: 'Spotswood HS',
				bandId: 'spotswood'
			},
			{
				time: '2:45 PM',
				description: 'Skyline HS',
				bandId: 'skyline'
			},
			{
				time: '3:00 PM',
				description: 'Thomas Edison HS',
				bandId: 'edison'
			},
			{
				time: '3:15 PM',
				description: 'Strasburg HS',
				bandId: 'strasburg'
			},
			{
				time: '3:30 PM',
				description: 'Break'
			}
		]
	},
	{
		group: 'Group 2',
		events: [
			{
				time: '3:45 PM',
				description: 'Culpeper County HS',
				bandId: 'culpeper'
			},
			{
				time: '4:00 PM',
				description: 'Landstown HS',
				bandId: 'landstown'
			},
			{
				time: '4:15 PM',
				description: 'Tuscarora HS',
				bandId: 'tuscarora'
			},
			{
				time: '4:30 PM',
				description: 'Turner Ashby HS',
				bandId: 'turnerashby'
			},
			{
				time: '4:45 PM',
				description: 'Clarke County HS',
				bandId: 'clarkecounty'
			}
		]
	},
	{
		group: 'Group 3',
		events: [
			{
				time: '5:00 PM',
				description: 'Yorktown HS',
				bandId: 'yorktown'
			},
			{
				time: '5:15 PM',
				description: 'Princess Anne HS',
				bandId: 'princessanne'
			},
			{
				time: '5:30 PM',
				description: 'Dinner Break'
			}
		]
	},
	{
		group: 'Group 4',
		events: [
			{
				time: '6:30 PM',
				description: 'George C Marshall HS',
				bandId: 'marshall'
			},
			{
				time: '6:45 PM',
				description: 'Osbourn Park HS',
				bandId: 'osbournpark'
			},
			{
				time: '7:00 PM',
				description: 'Rock Ridge HS',
				bandId: 'rockridge'
			},
			{
				time: '7:15 PM',
				description: 'Dominion HS',
				bandId: 'dominion'
			},
			{
				time: '7:30 PM',
				description: 'Break'
			}
		]
	},
	{
		group: 'Group 5',
		events: [
			{
				time: '7:45 PM',
				description: 'Riverside HS',
				bandId: 'riverside'
			},
			{
				time: '8:00 PM',
				description: 'Jefferson Forest HS',
				bandId: 'jeffersonforest'
			},
			{
				time: '8:15 PM',
				description: 'West Potomac HS',
				bandId: 'westpotomac'
			}
		]
	},
	{
		group: 'Group 6',
		events: [
			{
				time: '8:30 PM',
				description: 'Thomas Jefferson HSST',
				bandId: 'tjhsst'
			},
			{
				time: '8:45 PM',
				description: 'John Champe HS',
				bandId: 'johnchampe'
			},
			{
				time: '9:00 PM',
				description: 'Independence HS',
				bandId: 'independence'
			}
		]
	},
	{
		group: 'Exhibition',
		events: [
			{
				time: '9:15 PM',
				description: 'Freedom HS',
				bandId: 'freedom'
			}
		]
	},
	{
		group: 'Awards Ceremony',
		events: [
			{
				time: '9:30 PM',
				description: 'Presentation of awards'
			}
		]
	}
]);

// Store for senior class
export const seniorsStore = writable(['Ayden Bell', 'Umar Bhatti', 'Loyd Jacoby', 'Rachel Tobias']);

// Store for sponsors data
export const sponsorsStore = writable([
	{
		level: 'Platinum',
		sponsors: [
			{
				name: 'Chiron',
				logo: '/images/sponsors/placeholder.png'
			},
			{
				name: 'NOVEC',
				logo: '/images/sponsors/placeholder.png'
			}
		]
	},
	{
		level: 'Gold',
		sponsors: [
			{
				name: 'Ourisman',
				logo: '/images/sponsors/placeholder.png'
			},
			{
				name: 'Donna Chong, Realtor',
				logo: '/images/sponsors/placeholder.png'
			}
		]
	},
	{
		level: 'Silver',
		sponsors: [
			{
				name: 'Omar',
				logo: '/images/sponsors/placeholder.png'
			},
			{
				name: 'Sterling Family',
				logo: '/images/sponsors/placeholder.png'
			},
			{
				name: 'Iron Bear LLC',
				logo: '/images/sponsors/placeholder.png'
			}
		]
	},
	{
		level: 'Bronze',
		sponsors: [
			{
				name: 'Kravitz',
				logo: '/images/sponsors/placeholder.png'
			},
			{
				name: 'Sheetz',
				logo: '/images/sponsors/placeholder.png'
			}
		]
	},
	{
		level: 'Band Supporters',
		sponsors: [
			{
				name: 'Scott Philben',
				logo: '/images/sponsors/placeholder.png'
			},
			{
				name: 'sense of thai',
				logo: '/images/sponsors/placeholder.png'
			}
		]
	},
	{
		level: 'Freedom Showcase Sponsors',
		sponsors: [
			{
				name: 'Manhattan Pizza',
				logo: '/images/sponsors/placeholder.png'
			},
			{
				name: 'Walmart',
				logo: '/images/sponsors/placeholder.png'
			},
			{
				name: 'Texas Roadhouse',
				logo: '/images/sponsors/placeholder.png'
			}
		]
	}
]);

// Store for concessions data
export const concessionsStore = writable({
	categories: [
		{
			name: 'Combo Deal',
			items: [
				{
					name: "Pizza/Hot Dog/Cup o'Noodles",
					price: '7.00',
					description: 'Includes an entree, a drink (soda or water), and chips',
					icon: '🍽️'
				}
			]
		},
		{
			name: 'Food',
			items: [
				{
					name: 'Pizza',
					price: '4.00',
					description: 'Cheese or pepperoni',
					icon: '🍕'
				},
				{
					name: 'Hot Dog',
					price: '4.00',
					description: 'All-beef hot dog',
					icon: '🌭'
				},
				{
					name: "Cup o'Noodles",
					price: '3.00',
					description: 'Instant noodles',
					icon: '🍜'
				},
				{
					name: 'Pretzel',
					price: '3.00',
					description: 'Hot soft pretzel',
					icon: '🥨'
				},
				{
					name: 'Chips or Skinny Pop',
					price: '2.00',
					description: 'Assorted varieties',
					icon: '🥔'
				}
			]
		},
		{
			name: 'Drinks',
			items: [
				{
					name: 'Soda',
					price: '2.00',
					description: 'Coke, Diet Coke, Sprite, Fanta',
					icon: '🥤'
				},
				{
					name: 'Bottled Water',
					price: '2.00',
					description: '16oz bottle',
					icon: '💧'
				},
				{
					name: 'Gatorade',
					price: '2.00',
					description: 'Assorted varieties',
					icon: '🧃'
				},
				{
					name: 'Hot Tea',
					price: '1.00',
					description: 'Assorted varieties',
					icon: '🍵'
				},
				{
					name: 'Hot Chocolate',
					price: '2.00',
					description: 'Hot chocolate',
					icon: '☕'
				}
			]
		},
		{
			name: 'Treats & Candy',
			items: [
				{
					name: 'Nothing Bundt Cakes',
					price: '7.00',
					description: 'Fresh mini bundt cakes',
					icon: '🍰'
				},
				{
					name: 'Candy',
					price: '2.00',
					description: 'M&Ms (plain/peanut), Milky Way, Snickers, Skittles, Sour Patch, Twix',
					icon: '🍬'
				},
				{
					name: 'Airheads',
					price: '2.00',
					description: '3 pack',
					icon: '🍭'
				}
			]
		}
	],
	paymentMethods: ['Cash', 'Credit', 'Debit', 'Apple Pay']
});

// Store for adjudicators data
export const adjudicatorsStore = writable([
	{
		category: 'Ensemble Music',
		name: 'Mark Beamish'
	},
	{
		category: 'Individual Music',
		name: 'Chris Martin'
	},
	{
		category: 'Ensemble Visual',
		name: 'Greg Hamilton'
	},
	{
		category: 'Individual Visual',
		name: 'Jason Derting'
	},
	{
		category: 'GE Music',
		name: 'Tim Bray'
	},
	{
		category: 'GE Visual',
		name: 'Doug Casteen'
	},
	{
		category: 'Color Guard',
		name: 'Randall Brownlee'
	},
	{
		category: 'Percussion',
		name: 'Mike Kirby'
	}
]);

// Store for Freedom HS Band Boosters
export const boostersStore = writable({
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
  ],
  specialThanks: 'Manhattan Pizza'
});
