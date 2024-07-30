import { Controller, Get, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('App API')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    Logger.debug('hello');
    return this.appService.getHello();
  }
  @Get('/ping')
  ping(): string {
    return this.appService.testApp();
  }
}
