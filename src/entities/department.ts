import { Municipality } from './municipality';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Departament{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Municipality, muni => muni.department)
    municipalities: Municipality[]

}