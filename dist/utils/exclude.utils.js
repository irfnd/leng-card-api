"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exclude = exports.array = exports.object = void 0;
const object = (model, fields) => {
    for (const field of fields) {
        delete model[field];
    }
    return model;
};
exports.object = object;
const array = (model, fields) => {
    return model.map((item) => {
        fields.forEach((field) => {
            delete item[field];
        });
        return item;
    });
};
exports.array = array;
exports.Exclude = {
    object: exports.object,
    array: exports.array,
};
//# sourceMappingURL=exclude.utils.js.map