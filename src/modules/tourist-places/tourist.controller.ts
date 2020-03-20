import { TouristService } from './../tourist-places/tourist.service';
import { Controller, Get } from '@nestjs/common';
import { Tourist } from 'src/entities/tourist.entity';

@Controller('tourist')
export class TouristController {
    constructor(private touristService: TouristService){}

    @Get()
    async findAll(): Promise<Tourist[]>{
        return await this.touristService.findAll()
    }
}