
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Rol } from "./role.entitys";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @ManyToOne(type => Rol, role => role.users)
    role:Rol;
}