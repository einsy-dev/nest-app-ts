import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDocument } from 'src/mongo/schemas/books.schema';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel('Book') private readonly bookModel: Model<BookDocument>,
  ) {}
  async save(someData: { data: string }): Promise<void> {
    const book = await new this.bookModel(someData);
    book.save();
  }

  async getAll(): Promise<BookDocument[]> {
    return await this.bookModel.find();
  }

  async update(id: string, someData: { data: string }): Promise<void> {
    await this.bookModel.findByIdAndUpdate(id, someData);
  }

  async delete(id: string): Promise<void> {
    await this.bookModel.findByIdAndDelete(id);
  }
}
