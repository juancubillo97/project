import { PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class Tourist {

    @PrimaryGeneratedColumn()
    Nit: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    telephone: string;

    
}