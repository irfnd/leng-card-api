export declare const object: <Model, Fields extends keyof Model>(model: Model, fields: Fields[]) => Omit<Model, Fields>;
export declare const array: <Model, Fields extends keyof Model>(model: Model[], fields: Fields[]) => Omit<Model, Fields>[];
export declare const Exclude: {
    object: <Model, Fields extends keyof Model>(model: Model, fields: Fields[]) => Omit<Model, Fields>;
    array: <Model_1, Fields_1 extends keyof Model_1>(model: Model_1[], fields: Fields_1[]) => Omit<Model_1, Fields_1>[];
};
