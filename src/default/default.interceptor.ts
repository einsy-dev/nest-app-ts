import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable()
export class DefaultInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Default interceptor');
    return next.handle().pipe(
      map((data) => ({
        status: 'success',
        data: data,
      })),
      catchError((error) => of({ status: 'error', data: error })),
    );
  }
}
