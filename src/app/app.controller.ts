import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from '../cats/cats.service';

@Controller('cats')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}
}
