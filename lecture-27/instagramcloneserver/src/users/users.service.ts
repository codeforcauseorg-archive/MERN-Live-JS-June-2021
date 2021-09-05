import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from './users.dto';
import { User, UserDocument } from './users.model';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

  createUser(userBody : UserDTO): Promise<any> {
    const user = new this.userModel(userBody);
    return user.save();
  }

  fetchUser(uid : string): any{
    return this.userModel.findOne({uid});
  }

  deleteUser(uid : string): any{
    return this.userModel.deleteOne({uid});
  }

  fetchAll(): any{
    return this.userModel.find();
  }

}
