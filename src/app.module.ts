import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot(
      'mongodb+srv://einsy:lRMtFvXfYtMI95oC@netologycluster.17jlzdk.mongodb.net/nest',
    ),
  ],
})
export class AppModule {}
