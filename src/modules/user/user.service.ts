import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async  findAll(): Promise<User[]> {
        try {
            return await this.usersRepository.find();
        } catch (error) {
         console.log(error);
            
        }
        
    }

    async findOne(id: number): Promise<User> {
        try {
            return await this.usersRepository.findOne(id); 
        } catch (error) {
            console.log(error);
        }
        
    }

    async remove(id: number): Promise<void> {
        try {
            await this.usersRepository.delete(id);
        } catch (error) {
            console.log(error);
        }
        
    }
}

