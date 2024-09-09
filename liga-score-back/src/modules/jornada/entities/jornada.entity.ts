import { BaseEntity } from "@/base.entity";
import { Encuentro } from "@/modules/encuentro/entities/encuentro.entity";
import { Temporada } from "@/modules/temporada/entities/temporada.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('jornadas')
export class Jornada extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 100 })
    nombre: string;
  
    @ManyToOne(() => Temporada, (temporada) => temporada.jornadas, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'temporadaId' })  // Relación con Temporada
    temporada: Temporada;
  
    @Column()
    temporadaId: number;

    @OneToMany(() => Encuentro, (encuentro) => encuentro.jornada)
    encuentros: Encuentro[];
}
