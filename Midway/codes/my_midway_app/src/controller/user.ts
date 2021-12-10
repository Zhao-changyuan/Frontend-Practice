import {
  Controller,
  Get,
  Provide,
  Query,
  ALL,
  Body,
  Post,
  Param,
  RequestPath,
  RequestIP,
  Inject,
} from '@midwayjs/decorator';
import { User } from '../interface';
import { UserService } from '../service/user';

@Provide()
@Controller('/api/user')
export class UserController {
  @Inject()
  userService: UserService;

  @Get('/')
  async getUser(@Query('id') id: number) {
    const user = await this.userService.getUser1(id);
    return {
      success: true,
      message: 'OK',
      data: user,
    };
  }

  @Post('/')
  async updateUser(@Body(ALL) user: object): Promise<User> {
    console.log(user);
    return Promise.resolve(null);
  }

  @Get('/:uid')
  async findUser(
    @Param() uid: string,
    @RequestPath() path: string,
    @RequestIP() ip: string
  ): Promise<User> {
    console.log('uid', uid);
    console.log('path', path);
    console.log('ip', ip);
    return Promise.resolve(null);
  }
}
