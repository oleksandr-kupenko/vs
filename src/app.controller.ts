import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { v4 as uuidv4 } from 'uuid';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCards(): {id: string}[] {
    return this.appService.getVideoCards();
  }
}
