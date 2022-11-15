import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './shared/config/config.service';
import { RequestModule } from './modules/sera/request/request.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './core/exception.interceptor';

@Module({
  imports: [
    TypeOrmModule.forRoot( configService.getTypeOrmConfig() ),
    RequestModule
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_FILTER, useClass: AllExceptionsFilter }],
})
export class AppModule {}
