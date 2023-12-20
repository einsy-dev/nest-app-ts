import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class DefaultFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const code = exception.getStatus();
    const data = exception.getResponse();

    res.status(code).json({
      timestamp: Date.now(),
      status: 'Fail',
      data: data,
      code: code,
    });
  }
}
