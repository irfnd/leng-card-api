export const messages = {
	// User Messages
	user: {
		id: { valid: 'ID must be a valid MongoID' },
		username: {
			min: 'Username must be at least 8 characters long.',
			max: 'Username must be at most 20 characters long.',
			valid: 'Username must be alphanumeric with dots and underscores.',
		},
		email: { valid: 'Email must be a valid email address.' },
		name: {
			min: 'Name must be at least 3 characters long.',
			max: 'Name must be at most 30 characters long.',
			valid: 'Name must be alphabetic with spaces',
		},
		password: { valid: 'Password must be strong (1 uppercase, 1 lowercase, 1 number, 1 symbol, and min. 8 characters).' },
	},

	// Game Messages
	game: {
		id: { valid: 'ID must be a valid MongoID' },
	},

	// Game Messages
	round: {
		id: { valid: 'ID must be a valid MongoID' },
	},
};
