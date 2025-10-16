const bands = [
	{
		id: 'albemarle',
		school: 'Albemarle High School',
		name: '',
		location: '',
		groupNumber: 'Group 4',
		logoUrl: '',
		productionName: '',
		drumMajors: [],
		directors: [],
		songs: []
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
		id: 'gainesville',
		school: 'Gainesville High School',
		name: '',
		location: '',
		groupNumber: 'Group 4',
		logoUrl: '',
		productionName: '',
		drumMajors: [],
		directors: [],
		songs: []
	},
	{
		id: 'glenvar',
		school: 'Glenvar High School',
		name: '',
		location: '',
		groupNumber: 'Group 3',
		logoUrl: '',
		productionName: '',
		drumMajors: [],
		directors: [],
		songs: []
	},
	{
		id: 'hickory',
		school: 'Hickory High School',
		name: '',
		location: '',
		groupNumber: 'Group 6',
		logoUrl: '',
		productionName: '',
		drumMajors: [],
		directors: [],
		songs: []
	},
	{
		id: 'jamesmadison',
		school: 'James Madison High School',
		name: '',
		location: '',
		groupNumber: 'Group 6',
		logoUrl: '',
		productionName: '',
		drumMajors: [],
		directors: [],
		songs: []
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
		id: 'jrtucker',
		school: 'JR Tucker High School',
		name: '',
		location: '',
		groupNumber: 'Group 2',
		logoUrl: '',
		productionName: '',
		drumMajors: [],
		directors: [],
		songs: []
	},
	{
		id: 'liberty',
		school: 'Liberty Christian Academy',
		name: '',
		location: '',
		groupNumber: 'Group 2',
		logoUrl: '',
		productionName: '',
		drumMajors: [],
		directors: [],
		songs: []
	},
	{
		id: 'loudounvalley',
		school: 'Loudoun Valley High School',
		name: '',
		location: '',
		groupNumber: 'Group 2',
		logoUrl: '',
		productionName: '',
		drumMajors: [],
		directors: [],
		songs: []
	},
	{
		id: 'osbournpark',
		school: 'Osbourn Park High School',
		name: 'Marching Yellow Jackets',
		location: 'Manassas, VA',
		groupNumber: 'Group 3',
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
		id: 'potomacfalls',
		school: 'Potomac Falls High School',
		name: '',
		location: '',
		groupNumber: 'Group 3',
		logoUrl: '',
		productionName: '',
		drumMajors: [],
		directors: [],
		songs: []
	},
	{
		id: 'sherando',
		school: 'Sherando High School',
		name: '',
		location: '',
		groupNumber: 'Group 6',
		logoUrl: '',
		productionName: '',
		drumMajors: [],
		directors: [],
		songs: []
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
		id: 'westpotomac',
		school: 'West Potomac High School',
		name: 'Marching Wolverines',
		location: 'Alexandria, VA',
		groupNumber: 'Group 4',
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
		id: 'freedom',
		school: 'Freedom High School',
		name: 'Spirit of Freedom',
		location: 'South Riding, VA',
		groupNumber: 'Exhibition',
		logoUrl: '/images/schools/freedom.png',
		productionName: 'In the present',
		drumMajors: ['Abby Keenan', 'Joshua Choi', 'Bea Elliott'],
		directors: ['Jonathan Schiffler'],
		songs: [
			{ title: 'Lunch with the King', composer: 'Thomas Newman' },
			{ title: 'In Paradisum', composer: 'Frank Peterson and Sarah Brightman' },
			{ title: 'Road to Chicago', composer: 'Thomas Newman' },
			{ title: 'Original music', composer: 'William Pitts' }
		]
	}
];

export { bands };
