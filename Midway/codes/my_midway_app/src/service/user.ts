import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { User } from '../interface';

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }

  async getUser1(id: number): Promise<User> {
    return {
      id,
      name: 'Harry',
      age: 18,
    };
  }
}
