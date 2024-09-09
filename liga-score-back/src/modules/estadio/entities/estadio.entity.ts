import { BaseEntity } from "@/base.entity";
import { Club } from "@/modules/club/entities/club.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('estadios')
export class Estadio extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ length: 255 })
    direccion: string;

    @Column({ nullable: true })
    imagenPath: string;

    @Column({ nullable: true })
    imagenNombreArchivo: string;

    @OneToOne(() => Club, (club) => club.estadio)  // Relación uno a uno con Club
    club: Club;
}
