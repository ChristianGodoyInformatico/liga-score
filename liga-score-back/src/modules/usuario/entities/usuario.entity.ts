import { BaseEntity } from "@/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200 })
    nombres: string;

    @Column({ length: 200 })
    apellidos: string;

    @Column({ length: 10 })
    rut: string;

    @Column({ type: 'date', nullable: true })
    fechaNacimiento?: Date;

    @Column({ length: 255, nullable: true })
    correo?: string;

    @Column({ length: 255, nullable: true })
    fotoPath?: string;

    @Column({ length: 255, nullable: true })
    fotoNombreArchivo?: string;

    @Column({ length: 255, nullable: true })
    direccion?: string;

    @Column({ default: true })
    habilitado: boolean;
}
