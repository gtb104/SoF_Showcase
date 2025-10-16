const concessions = {
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
};

export { concessions };
