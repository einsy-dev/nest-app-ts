import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  Put,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { BookDocument } from 'src/mongo/schemas/books.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async value(): Promise<BookDocument[]> {
    return new Promise<BookDocument[]>((resolve) => {
      resolve(this.booksService.getAll());
    });
  }

  @Post()
  @UseInterceptors(NoFilesInterceptor())
  async save(@Body() data: { data: string }): Promise<void> {
    this.booksService.save(data);
  }

  @Put()
  @UseInterceptors(NoFilesInterceptor())
  async update(@Body() data: { id: string; data: string }): Promise<void> {
    this.booksService.update(data.id, data);
  }

  @Delete()
  @UseInterceptors(NoFilesInterceptor())
  async delete(@Body() body: { id: string }): Promise<void> {
    this.booksService.delete(body.id);
  }
}
