import { Club } from "@/modules/club/entities/club.entity";
import { Estadio } from "@/modules/estadio/entities/estadio.entity";
import { Jornada } from "@/modules/jornada/entities/jornada.entity";
import { Resultado } from "@/modules/resultado/entities/resultado.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('encuentros')
export class Encuentro extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Club, (club) => club.encuentrosLocal, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'localId' })
    local: Club;

    @ManyToOne(() => Club, (club) => club.encuentrosVisita, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'visitaId' })
    visita: Club;

    @ManyToOne(() => Jornada, (jornada) => jornada.encuentros, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'jornadaId' })
    jornada: Jornada;

    @ManyToOne(() => Estadio, { nullable: true })  // Puede ser nulo
    @JoinColumn({ name: 'estadioId' })
    estadio: Estadio;

    @Column()
    fecha: Date;

    @Column({ type: 'jsonb', nullable: true })
    fechaSuspensiones: object[];

    // Relación uno a muchos con resultados
    @OneToMany(() => Resultado, (resultado) => resultado.encuentro, { cascade: true })
    resultados: Resultado[];
}
