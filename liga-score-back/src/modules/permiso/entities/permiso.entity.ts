import { BaseEntity } from "@/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('permisos')
export class Permiso extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 100 })
    modulo: string;
  
    @Column({ length: 100 })
    accion: string;
  
    @Column({ type: 'text', nullable: true })
    descripcion?: string;  // Descripción es opcional
}
