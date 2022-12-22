import { Controller, Get, Req } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { CatsService } from '../cats/cats.service';

@Controller('cats')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}
}
