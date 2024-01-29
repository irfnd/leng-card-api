import { Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { PrismaErrorCode } from 'src/prisma/prisma.errorCode';

import type { ArgumentsHost } from '@nestjs/common';
import type { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
	private sendResponse(response: Response, code: number, message: string) {
		return response.status(code).json({ statusCode: code, message: message });
	}

	catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const message = exception.message.replace(/\n/g, '');
		if (PrismaErrorCode.BAD_REQUEST.includes(exception.code)) {
			const status = HttpStatus.BAD_REQUEST;
			this.sendResponse(response, status, message);
		} else if (PrismaErrorCode.NOT_FOUND.includes(exception.code)) {
			const status = HttpStatus.NOT_FOUND;
			this.sendResponse(response, status, message);
		} else if (PrismaErrorCode.CONFLICT.includes(exception.code)) {
			const status = HttpStatus.CONFLICT;
			this.sendResponse(response, status, message);
		} else {
			super.catch(exception, host);
		}
	}
}
