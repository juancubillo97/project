import { User } from 'src/entities/user.entity';
import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    async  findAll(): Promise<User[]> {
        return await this.userService.findAll()
      /*  res.status(HttpStatus.OK).json(response)*/
    }
}
