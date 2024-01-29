import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import type { ArgumentsHost } from '@nestjs/common';
export declare class PrismaClientExceptionFilter extends BaseExceptionFilter {
    private sendResponse;
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): void;
}
