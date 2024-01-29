"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRefreshContext = void 0;
const common_1 = require("@nestjs/common");
exports.TokenRefreshContext = (0, common_1.createParamDecorator)((_, context) => {
    return context.switchToHttp().getRequest().user;
});
//# sourceMappingURL=token-refresh.decorator.js.map