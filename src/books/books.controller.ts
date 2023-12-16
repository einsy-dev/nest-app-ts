import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { BooksService } from './books.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async value(): Promise<string[]> {
    return new Promise<string[]>((resolve) => {
      resolve(this.booksService.value);
    });
  }

  @Post()
  @UseInterceptors(NoFilesInterceptor())
  async save(@Body() { data }): Promise<void> {
    this.booksService.save = data;
  }
}
