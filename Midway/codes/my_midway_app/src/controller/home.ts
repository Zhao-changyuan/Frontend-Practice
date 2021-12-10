import {
  App,
  Controller,
  Get,
  HttpCode,
  Inject,
  Post,
  Provide,
  SetHeader,
} from '@midwayjs/decorator';
import { Application, Context } from 'egg';

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @App()
  app: Application;

  @Get('/*')
  async home1() {
    return 'Hello 优先级';
  }

  @Get('/')
  @Get('/home')
  @HttpCode(201)
  @SetHeader({
    'x-bbb': '123',
    'x-aaa': '456',
  })
  async home() {
    console.log(this.app.curl);
    return 'Hello Midwayjs!';
  }

  @Post('/update')
  async updateData() {
    return '则会使一个post方法';
  }
}
