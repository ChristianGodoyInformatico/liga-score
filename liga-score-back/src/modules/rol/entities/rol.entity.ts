import { BaseEntity } from "@/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class Rol extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ type: 'text' })
    descripcion: string;
}
