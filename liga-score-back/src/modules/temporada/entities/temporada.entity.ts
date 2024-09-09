import { BaseEntity } from "@/base.entity";
import { Jornada } from "@/modules/jornada/entities/jornada.entity";
import { Serie } from "@/modules/serie/entities/serie.entity";
import { Torneo } from "@/modules/torneo/entities/torneo.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('temporadas')
export class Temporada extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    nombre: string;

    @Column({
        nullable: true
    })
    reglamentoPath: string

    @Column({
        nullable: true
    })
    reglamentoNombreArchivo: string

    @ManyToOne(() => Torneo, (torneo) => torneo.temporadas, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'torneoId' })  // Relación con la tabla torneo
    torneo: Torneo;

    @Column()
    torneoId: number;

    @ManyToMany(() => Serie, (serie) => serie.temporadas)
    series: Serie[];  // Arreglo de series asociadas a la temporada

    @OneToMany(() => Jornada, (jornada) => jornada.temporada)
    jornadas: Jornada[];
}
