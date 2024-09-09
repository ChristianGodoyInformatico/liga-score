import { BaseEntity } from "@/base.entity";
import { Temporada } from "@/modules/temporada/entities/temporada.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('series')
export class Serie extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({
        nullable: true,
        type: 'text'
    })
    descripcion: string;

    @ManyToMany(() => Temporada, (temporada) => temporada.series)
    @JoinTable({
        name: 'temporada_series',  // Nombre de la tabla intermedia
        joinColumn: {
            name: 'serieId',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'temporadaId',
            referencedColumnName: 'id'
        }
    })
    temporadas: Temporada[];  // Relación muchos a muchos con Temporada
}
