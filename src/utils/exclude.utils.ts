export const object = <Model, Fields extends keyof Model>(model: Model, fields: Fields[]): Omit<Model, Fields> => {
	for (const field of fields) {
		delete model[field];
	}
	return model;
};

export const array = <Model, Fields extends keyof Model>(model: Model[], fields: Fields[]): Array<Omit<Model, Fields>> => {
	return model.map((item) => {
		fields.forEach((field) => {
			delete item[field];
		});
		return item;
	});
};

export const Exclude = {
	object,
	array,
};
