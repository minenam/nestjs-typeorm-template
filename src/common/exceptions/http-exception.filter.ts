import { Response, Request } from 'express';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

/**
 * @code writer 남혜민
 * @description Exceptionfilter
 */
@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = exception.getResponse() as
      | string
      | { error: string; statusCode: number; message: string | string[] };

    if (typeof error == 'string') {
      response.status(status).json({
        success: false,
        timestamp: new Date().toISOString(),
        message: error,
        data: {},
      });
    } else {
      response.status(status).json({
        success: false,
        timestamp: new Date().toISOString(),
        message: error.error,
        data: error.message,
      });
    }
  }
}
