import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * @description Request logger 코드
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: () => void) {
    res.on('finish', () => {
      this.logger.log(`${req.method} ${req.originalUrl} ${res.statusCode}`);
    });
    next();
  }
}
