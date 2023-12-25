import { AuthService } from './auth/auth.service';
import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from './config/config.module';
@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot(process.env.MONDO_DB),
    AuthModule,
    UserModule,
    ConfigModule,
  ],
  providers: [AuthService],
})
export class AppModule {}
