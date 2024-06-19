import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  testApp(): string {
    return 'Ten tén ten tèn ten';
  }
}
