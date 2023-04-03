import { ExceptionFilter, Catch, HttpException, ArgumentsHost } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request, Response } from 'express';
import { AlreadyExistError, FieldRequiredError, NotFoundError } from 'src/core/errors';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        if (exception instanceof AlreadyExistError) return response.status(400).json({
            message: "Already exists"
        })

        if (exception instanceof NotFoundError) return response.status(400).json({
            message: "Not found Entity"
        })

        if (exception instanceof FieldRequiredError) return response.status(403).json({
            message: `${exception.message} is required`
        })
    }
}
