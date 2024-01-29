"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClientExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const client_1 = require("@prisma/client");
const prisma_errorCode_1 = require("./prisma.errorCode");
let PrismaClientExceptionFilter = class PrismaClientExceptionFilter extends core_1.BaseExceptionFilter {
    sendResponse(response, code, message) {
        return response.status(code).json({ statusCode: code, message: message });
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const message = exception.message.replace(/\n/g, '');
        if (prisma_errorCode_1.PrismaErrorCode.BAD_REQUEST.includes(exception.code)) {
            const status = common_1.HttpStatus.BAD_REQUEST;
            this.sendResponse(response, status, message);
        }
        else if (prisma_errorCode_1.PrismaErrorCode.NOT_FOUND.includes(exception.code)) {
            const status = common_1.HttpStatus.NOT_FOUND;
            this.sendResponse(response, status, message);
        }
        else if (prisma_errorCode_1.PrismaErrorCode.CONFLICT.includes(exception.code)) {
            const status = common_1.HttpStatus.CONFLICT;
            this.sendResponse(response, status, message);
        }
        else {
            super.catch(exception, host);
        }
    }
};
exports.PrismaClientExceptionFilter = PrismaClientExceptionFilter;
exports.PrismaClientExceptionFilter = PrismaClientExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError)
], PrismaClientExceptionFilter);
//# sourceMappingURL=prisma.exception.js.map