import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private data: string[] = [];
  set save(someData) {
    new Promise((resolve) => {
      resolve(this.data.push(someData));
    });
  }

  get value(): Promise<string[]> {
    return new Promise<string[]>((resolve) => {
      resolve(this.data);
    });
  }
}
