import { BaseEntity } from "@/base.entity";
import { DirectivaTorneo } from "@/modules/directiva-torneo/entities/directiva-torneo.entity";
import { Temporada } from "@/modules/temporada/entities/temporada.entity";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";

@Entity('torneos')
export class Torneo extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column({
        nullable: true
    })
    descripcion: string;
  
    @Column()
    ubicacion: string;

    @OneToMany(() => Temporada, (temporada) => temporada.torneo)
    temporadas: Temporada[];

    @OneToMany(() => DirectivaTorneo, (directivaTorneo) => directivaTorneo.torneo)
    directivaTorneo: DirectivaTorneo[];
}
