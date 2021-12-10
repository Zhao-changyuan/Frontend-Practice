import { Inject, Provide } from '@midwayjs/decorator';
import {
  IMidwayWebNext,
  IWebMiddleware,
  MidwayWebMiddleware,
} from '@midwayjs/web';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Provide()
export class ReportMiddleware implements IWebMiddleware {
  @Inject()
  ctx: Context;

  resolve(): MidwayWebMiddleware {
    return async (ctx: Context, next: IMidwayWebNext) => {
      const userService = await ctx.requestContext.getAsync<UserService>(
        'userService'
      );

      const url = ctx.request.path;
      const startTime = Date.now();

      await next();

      console.log(`path: ${url}, time: ${Date.now() - startTime} ms.`);
    };
  }
}
