import { Body, Controller, Post, Get } from '@nestjs/common';
import { User } from './user';
import { UserDto } from './userDto';
import { UsersService } from './users.service';

@Controller("/users/")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/")
  addUser(@Body() body: UserDto): User {
      return this.usersService.addUser(body.name, body.age);
  }
  
  @Get("/")
  getUsers(): any{
      return this.usersService.getUsers();
  }
}
