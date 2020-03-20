import { UserService } from './../modules/user/user.service';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Rol {
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@OneToMany(type => User, users => users.role)
    users: User[]

}
