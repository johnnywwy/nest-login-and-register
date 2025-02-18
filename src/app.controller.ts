import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @UseGuards(LoginGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('aaa')
  // aaa() {
  //   return 'aaa';
  // }

  // @Get('bbb')
  // bbb() {
  //   return 'bbb';
  // }
}
