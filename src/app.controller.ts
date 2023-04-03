import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':id')
  getHello(@Param('id') id: string): { data: { message: string } } {

    const result = this.appService.getHello();
    return { data: { message: `${result} ${id}`} }
  }
}
