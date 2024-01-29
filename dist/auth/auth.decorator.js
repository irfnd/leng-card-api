"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthContext = void 0;
const common_1 = require("@nestjs/common");
exports.AuthContext = (0, common_1.createParamDecorator)((key, context) => {
    const getUser = context.switchToHttp().getRequest().user;
    return key ? getUser[key] : getUser;
});
//# sourceMappingURL=auth.decorator.js.map