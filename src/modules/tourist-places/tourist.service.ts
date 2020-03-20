import { Tourist } from '../../entities/tourist.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TouristService {
    constructor(@InjectRepository(Tourist) private touristRepository: Repository<Tourist>) { }

    async findAll(): Promise<Tourist[]> {
        try {
            return await this.touristRepository.find();
        } catch (error) {
            console.log(error);
        }
    }

    async findOne(Nit: number): Promise<Tourist> {
try {
    return await this.touristRepository.findOne(Nit);
} catch (error) {
    console.log(error);
}
    }

    async remove(Nit: number): Promise<void> {
        try {
           await this.touristRepository.delete(Nit); 
        } catch (error) {
            console.log(error);
        }
    }
}
