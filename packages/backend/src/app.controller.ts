import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('vi/health')
  health() {
    return '10ms';
  }
}
