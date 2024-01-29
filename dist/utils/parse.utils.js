"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseUtils = exports.query = void 0;
function query(queries, fields = {}) {
    const { equalFields, dateFields } = fields;
    return Object.keys(queries).reduce((acc, key) => {
        const value = queries[key];
        if (equalFields?.includes(key))
            return { ...acc, [key]: { equals: value } };
        if (dateFields?.includes(key))
            return { ...acc, [key]: { gt: value } };
        return { ...acc, [key]: { contains: value, mode: 'insensitive' } };
    }, {});
}
exports.query = query;
exports.ParseUtils = { query };
//# sourceMappingURL=parse.utils.js.map