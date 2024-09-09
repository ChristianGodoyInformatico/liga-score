import { BaseEntity } from "@/base.entity";
import { DirectivaClub } from "@/modules/directiva-club/entities/directiva-club.entity";
import { Encuentro } from "@/modules/encuentro/entities/encuentro.entity";
import { Estadio } from "@/modules/estadio/entities/estadio.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('clubes')
export class Club extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ length: 200 })
    sector: string;

    @Column()
    fechaInauguracion: Date;

    @Column({ nullable: true })
    escudoPath: string;

    @Column({ nullable: true })
    escudoNombreArchivo: string;

    @Column({ length: 50 })
    alias: string;

    @OneToOne(() => Estadio, (estadio) => estadio.club, { cascade: true })  // Relación uno a uno con Estadio
    @JoinColumn({ name: 'estadioId' })
    estadio: Estadio;

    @Column({ nullable: true })
    estadioId: number;

    // Relación uno a muchos con encuentros como equipo local
    @OneToMany(() => Encuentro, (encuentro) => encuentro.local, { cascade: true })
    encuentrosLocal: Encuentro[];

    // Relación uno a muchos con encuentros como equipo visitante
    @OneToMany(() => Encuentro, (encuentro) => encuentro.visita, { cascade: true })
    encuentrosVisita: Encuentro[];

    @OneToMany(() => DirectivaClub, (directivaClub) => directivaClub.club)
    directivaClubs: DirectivaClub[];
}
