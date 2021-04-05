import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { HouseModule } from './house/house.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    HouseModule
  ],
})
export class AppModule {}
