export function query<T extends object, K extends keyof T>(
	queries: T,
	fields: {
		equalFields?: K[];
		dateFields?: K[];
	} = {}
): Record<string, any> {
	const { equalFields, dateFields } = fields;
	return Object.keys(queries).reduce((acc, key) => {
		const value = queries[key];
		if (equalFields?.includes(key as K)) return { ...acc, [key]: { equals: value } };
		if (dateFields?.includes(key as K)) return { ...acc, [key]: { gt: value } };
		return { ...acc, [key]: { contains: value, mode: 'insensitive' } };
	}, {});
}

export const ParseUtils = { query };
