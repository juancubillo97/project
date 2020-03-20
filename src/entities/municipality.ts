import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Departament } from './department';

@Entity()
export class Municipality{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Departament, department => department.municipalities )
    department: Departament
}