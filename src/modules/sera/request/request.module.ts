import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { RequestEntity } from './entity/request.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([RequestEntity]) ],
  providers: [RequestService],
  controllers: [RequestController]
})
export class RequestModule {}
