import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UsersService {

  counter = 0;
  users: Map<number, User>;

  constructor(){
    this.users = new Map<number, User>();
  }

  addUser(name, age) {
    let user = new User(this.counter, name, age);
    this.users.set(this.counter, user);
    this.counter+=1;
    return user;
  }

  getUsers(){
    console.log(this.users.values());
    return Array.from(this.users.values());
  }
}
