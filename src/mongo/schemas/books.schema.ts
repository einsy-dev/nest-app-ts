import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;
@Schema()
export class Book {
  @Prop({ default: 'Def', required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  price: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
