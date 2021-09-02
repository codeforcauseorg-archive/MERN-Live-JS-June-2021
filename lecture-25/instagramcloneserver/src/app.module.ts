import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://anuj:anuj@cluster0.x36ik.mongodb.net/instaDatabase?retryWrites=true&w=majority'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
