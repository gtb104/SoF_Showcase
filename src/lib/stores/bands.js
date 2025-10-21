const bands = [
	{
		id: 'albemarle',
		school: 'Albemarle High School',
		name: 'Marching Patriots',
		location: 'Charlottesville, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/albemarle.png',
		productionName: 'Phases of Artemis',
		drumMajors: ['Nate Paul'],
		directors: ['Andrew LaPrade'],
		songs: [
			{ title: 'Symphony No. 10', composer: 'Shostakovich' },
			{ title: 'Vertigo', composer: 'Bernard Hermann' },
			{ title: 'Themes based on Sensemaya', composer: 'Revueltas' },
			{ title: 'Strange Humors', composer: 'John Mackey' }
		]
	},
	{
		id: 'clarkecounty',
		school: 'Clarke County High School',
		name: "Screamin' Eagles",
		location: 'Berryville, VA',
		groupNumber: 'Group 2',
		logoUrl: '/images/schools/clarkecounty.png',
		productionName: 'Breakout!',
		drumMajors: ['Annaliese Pledgie'],
		directors: ['Mark Curry', 'Averie Jackson'],
		songs: [
			{ title: 'Breakout!', composer: 'Randall Standridge' }
		]
	},
	{
		id: 'gainesville',
		school: 'Gainesville High School',
		name: 'Cardinal Marching Band',
		location: 'Gainesville, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/gainesville.png',
		productionName: 'Siege of the Sirens: The Final Voyage',
		drumMajors: ['Aly Estenor'],
		directors: ['Vince Bryk', 'Sarah Bryk'],
		songs: [
			{ title: 'Aquarium', composer: 'Camille Saint-Saëns' },
			{ title: 'Wellerman', composer: 'Traditional Sea Shanty' },
			{ title: 'Daughter of the Sea', composer: 'Unknown' },
			{ title: 'Russian Sailor\'s Dance', composer: 'Reinhold Glière' }
		]
	},
	{
		id: 'glenvar',
		school: 'Glenvar High School',
		name: 'Sound of the Highlands Marching Band',
		location: 'Salem, VA',
		groupNumber: 'Group 3',
		logoUrl: '/images/schools/glenvar.png',
		productionName: 'Wired',
		drumMajors: ['Lauren Starkey'],
		directors: ['Nicholas Alford'],
		songs: [
			{ title: 'Power Up', composer: 'Unknown' },
			{ title: 'The Grid', composer: 'Unknown' },
			{ title: 'Alternate Reality', composer: 'Unknown' },
			{ title: 'Virus', composer: 'Unknown' }
		]
	},
	{
		id: 'jamesmadison',
		school: 'James Madison High School',
		name: 'Pride of Vienna',
		location: 'Vienna, VA',
		groupNumber: 'Group 6',
		logoUrl: '/images/schools/jamesmadison.png',
		productionName: 'Out of the Blue',
		drumMajors: ['Meghan Chang', 'Daniel Lee'],
		directors: ['Michael Hackbarth'],
		songs: [
			{ title: 'Rhapsody in Blue', composer: 'George Gershwin' },
			{ title: 'Truman Sleeps', composer: 'Philip Glass' },
			{ title: 'Bluest Flame', composer: 'Selena Gomez' },
			{ title: 'Hymn to a Blue Hour', composer: 'John Mackey' },
			{ title: 'Blue Shades', composer: 'Frank Ticheli' }
		]
	},
	{
		id: 'johnchampe',
		school: 'John Champe High School',
		name: 'Marching Knights',
		location: 'Aldie, VA',
		groupNumber: 'Group 6',
		logoUrl: '/images/schools/johnchampe.png',
		productionName: 'Knight Shades',
		drumMajors: ['Rithik Iyer', 'Jiya Patel', 'Alejandro Zayas-Rodriguez'],
		directors: ['Adam Foreman', 'Jason Miller'],
		songs: [
			{ title: 'Blinding Lights', composer: 'The Weeknd' },
			{ title: 'Blue Shades', composer: 'Frank Ticheli' },
			{ title: 'Sunglasses at Night', composer: 'Corey Hart' },
			{ title: 'The Light Fantastic', composer: 'Paul Lovatt-Cooper' }
		]
	},
	{
		id: 'jrtucker',
		school: 'JR Tucker High School',
		name: 'Marching Tigers',
		location: 'Henrico, VA',
		groupNumber: 'Group 3',
		logoUrl: '/images/schools/jrtucker.png',
		productionName: 'Renegades',
		drumMajors: ['Harper Nishimoto', 'Samantha Sherlock'],
		directors: ['Austin L. Frank'],
		songs: [
			{ title: 'Uprising', composer: 'Muse' },
			{ title: 'Stand Up', composer: 'Cynthia Erivo' },
			{ title: 'We\'re Not Gonna Take It', composer: 'Twisted Sister' }
		]
	},
	{
		id: 'liberty',
		school: 'Liberty Christian Academy',
		name: 'Marching Bulldogs',
		location: 'Lynchburg, VA',
		groupNumber: 'Group 2',
		logoUrl: '/images/schools/liberty.png',
		productionName: 'Outback Odyssey',
		drumMajors: ['Peyton Reyes'],
		directors: ['Autumn Esquirell'],
		songs: [
			{ title: 'Theme from "Crocodile Dundee"', composer: 'Mark Thomas' },
			{ title: 'Carnival of the Animals', composer: 'Camille Saint-Saëns' },
			{ title: 'Crocodile Rock', composer: 'Elton John' },
			{ title: 'Down Under', composer: 'Men at Work' }
		]
	},
	{
		id: 'loudounvalley',
		school: 'Loudoun Valley High School',
		name: 'Marching Vikings',
		location: 'Purcellville, VA',
		groupNumber: 'Group 2',
		logoUrl: '/images/schools/loudounvalley.png',
		productionName: 'Wild, Wild Western Loudoun',
		drumMajors: ['Matt Hile', 'Richie Ring'],
		directors: ['Megan Stallings'],
		songs: []
	},
	{
		id: 'northstafford',
		school: 'North Stafford School',
		name: 'Big Blue Marching Band',
		location: 'Stafford, VA',
		groupNumber: 'Group 5',
		logoUrl: '/images/schools/northstafford.png',
		productionName: 'The Circle of Life',
		drumMajors: ['Joseph Maybo'],
		directors: ['Chris Mallory'],
		songs: [
			{ title: 'Full Circle', composer: 'Carol Brittan' },
			{ title: 'This Land', composer: 'Hans Zimmer' },
			{ title: 'Puma', composer: 'Karl Lundeberg' },
			{ title: '557', composer: 'Pat Metheny' },
			{ title: 'Circle of Life', composer: 'Elton John' },
			{ title: 'I Just Can\'t Wait to be King', composer: 'Elton John' },
			{ title: 'The First Circle', composer: 'Pat Metheny' }
		]
	},
	{
		id: 'osbournpark',
		school: 'Osbourn Park High School',
		name: 'Marching Yellow Jackets',
		location: 'Manassas, VA',
		groupNumber: 'Group 3',
		logoUrl: '/images/schools/osbournpark.png',
		productionName: 'The Mark We Leave',
		drumMajors: ['Eden Adu-Mensah', 'Brianna Ramos'],
		directors: ['Ashley Radabaugh'],
		songs: [
			{ title: 'Fame', composer: 'Irene Cara' },
			{ title: 'Triumphant Fanfare', composer: 'Richard Saucedo' },
			{ title: 'If I Had My Way', composer: 'Linda Eder' },
			{ title: 'Beethoven\'s 9th Symphony', composer: 'Ludwig van Beethoven' }
		]
	},
	{
		id: 'potomacfalls',
		school: 'Potomac Falls High School',
		name: 'Marching Panthers',
		location: 'Potomac Falls, VA',
		groupNumber: 'Group 3',
		logoUrl: '/images/schools/potomacfalls.png',
		productionName: 'Ascend',
		drumMajors: ['Ellie VanderHeyden', 'Bryan Advincula'],
		directors: ['Mahdi Lotfi'],
		songs: [
			{ title: 'Married Life (Up)', composer: 'Michael Giacchino' },
			{ title: 'Rockeship!', composer: 'Unknown' },
			{ title: 'Clair de Lune', composer: 'Claude Debussy' },
			{ title: 'Theme from Interstellar', composer: 'Hans Zimmer' }
		]
	},
	{
		id: 'sherando',
		school: 'Sherando High School',
		name: 'Marching Warriors',
		location: 'Stephens City, VA',
		groupNumber: 'Group 6',
		logoUrl: '/images/schools/sherando.png',
		productionName: 'Transcend the Stone',
		drumMajors: ['Josie Austin', 'Glyn Lystrup', 'Gerardo Trinidad-Membreno'],
		directors: ['Tyler Ende'],
		songs: [
			{ title: 'The Bells of Notre Dame', composer: 'Alan Menken' },
			{ title: 'Night on Bald Mountain', composer: 'Modest Mussorgsky' },
			{ title: 'Heart of Stone', composer: 'Unknown' },
			{ title: 'Baba Yaga', composer: 'Anatoly Liadov' },
			{ title: 'Turn to Stone', composer: 'Electric Light Orchestra' }
		]
	},
	{
		id: 'spotswood',
		school: 'Spotswood High School',
		name: 'Marching Trailblazers',
		location: 'Penn Laird, VA',
		groupNumber: 'Group 1',
		logoUrl: '/images/schools/spotswood.png',
		productionName: 'Icarus',
		drumMajors: ['Madison Vance', 'Paul Tobey', 'Jude Brooks', 'Sadra Keyvanfar', 'Callie Massey'],
		directors: ['Sean Macomber'],
		songs: [
			{ title: 'Sogno di Volare', composer: 'Christopher Tin' },
			{ title: 'Romantic Flight from How to Train Your Dragon', composer: 'John Powell' },
			{ title: 'Dies Irae', composer: 'Giuseppe Verdi' }
		]
	},
	{
		id: 'tjhsst',
		school: 'Thomas Jefferson HSST',
		name: 'Thomas Jefferson Marching Colonials',
		location: 'Alexandria, VA',
		groupNumber: 'Group 6',
		logoUrl: '/images/schools/tjhsst.png',
		productionName: 'Shadows in the Alleys of the City',
		drumMajors: ['Arin Kim', 'Grace Bai'],
		directors: ['Steve Ballard'],
		songs: [
			{ title: 'Children\'s Hour of Dream', composer: 'Charles Mingus' },
			{ title: 'Theme from TV Show "Succession"', composer: 'Nicholas Britell' },
			{ title: 'Big Four on the River', composer: 'James David' },
			{ title: 'Metropolis 1927', composer: 'Peter Graham' }
		]
	},
	{
		id: 'tuscarora',
		school: 'Tuscarora High School',
		name: 'Marching Huskies',
		location: 'Leesburg, VA',
		groupNumber: 'Group 2',
		logoUrl: '/images/schools/tuscarora.png',
		productionName: 'Common Sense',
		drumMajors: ['Aidan Spessard'],
		directors: ['McKenzie Durgin'],
		songs: [
			{ title: 'Toxic', composer: 'Britney Spears' },
			{ title: 'Adagio for Tron', composer: 'Daft Punk' },
			{ title: 'BANG', composer: 'AJR' },
			{ title: 'Close Encounters', composer: 'John Williams' }
		]
	},
	{
		id: 'westpotomac',
		school: 'West Potomac High School',
		name: 'Marching Wolverines',
		location: 'Alexandria, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/westpotomac.png',
		productionName: 'Rock The Ring!',
		drumMajors: ['Colten Wright'],
		directors: ['Joe Antonucci'],
		songs: [
			{ title: 'Gonna Fly Now', composer: 'Bill Conti' },
			{ title: 'Punch Out', composer: 'Unknown' },
			{ title: 'We Will Rock You', composer: 'Queen' },
			{ title: 'We Are The Champions', composer: 'Queen' }
		]
	},
	{
		id: 'yorktown',
		school: 'Yorktown High School',
		name: 'Yorktown Marching Band',
		location: 'Arlington, VA',
		groupNumber: 'Group 3',
		logoUrl: '/images/schools/yorktown.png',
		productionName: 'One',
		drumMajors: ['Liem Nguyen'],
		directors: ['Joseph Witkowski'],
		songs: [
			{ title: 'First Suite in E-flat for Military band', composer: 'Gustav Holst' },
			{ title: 'One', composer: 'U2' },
			{ title: 'One', composer: 'Three Dog Night' },
			{ title: 'One', composer: 'Metallica' }
		]
	},
	{
		id: 'freedom',
		school: 'Freedom High School',
		name: 'Spirit of Freedom',
		location: 'South Riding, VA',
		groupNumber: 'Exhibition',
		logoUrl: '/images/schools/freedom.png',
		productionName: 'In the Present',
		drumMajors: ['Abby Keenan', 'Josh Choi', 'Bea Elliot'],
		directors: ['Jonathan Schiffler'],
		songs: [
			{ title: 'Right Now', composer: 'Van Halen' },
			{ title: 'Simple Gifts', composer: 'Traditional' },
			{ title: 'Deciduous', composer: 'Viet Cuong' }
		]
	}
];

export { bands };
