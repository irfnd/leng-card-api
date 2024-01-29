"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = void 0;
exports.messages = {
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
    game: {
        id: { valid: 'ID must be a valid MongoID' },
    },
    round: {
        id: { valid: 'ID must be a valid MongoID' },
    },
};
//# sourceMappingURL=error.messages.js.map