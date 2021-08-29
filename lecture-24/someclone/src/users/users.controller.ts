import { Controller, Get } from '@nestjs/common';

@Controller("/users/")
export class UsersController {
  constructor() {}

  @Get("/")
  getHello(): string {
    return "Hello from users"
  }
  
}
