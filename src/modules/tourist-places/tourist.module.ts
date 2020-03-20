import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TouristService } from './tourist.service';
import { Tourist } from 'src/entities/tourist.entity';
import { TouristController } from './tourist.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Tourist])],
    providers: [TouristService],
    controllers: [TouristController]
})
export class TouristModule {}