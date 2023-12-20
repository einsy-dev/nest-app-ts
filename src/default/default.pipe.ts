import {
  PipeTransform,
  Injectable,
  BadRequestException,
  Body,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class DefaultPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(@Body() value) {
    console.log(value);
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
