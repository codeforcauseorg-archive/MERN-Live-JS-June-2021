import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserDTO } from './users.dto';
import { UsersService } from './users.service';

@Controller("/users/")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/")
  createUser(@Body() body : UserDTO) : Promise<any> {
    return this.usersService.createUser(body);
  }

  @Get("/:uid")
  fetchUser(@Param('uid') uid) : Promise<any> {
    return this.usersService.fetchUser(uid);
  }

  @Get("/")
  fetchAll() : Promise<any> {
    return this.usersService.fetchAll();
  }


  @Delete("/:uid")
  deleteUser(@Param('uid') uid) : Promise<any> {
    return this.usersService.deleteUser(uid);
  }

}
