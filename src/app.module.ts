import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './shared/config/config.service';
import { RequestModule } from './modules/sera/request/request.module';


@Module({
  imports: [
    TypeOrmModule.forRoot( configService.getTypeOrmConfig() ),
    RequestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
