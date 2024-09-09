import { BaseEntity } from "@/base.entity";
import { Usuario } from "@/modules/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('jugadores')
export class Jugador extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Usuario)
    @JoinColumn({ name: 'usuarioId' })
    usuario: Usuario;

    @Column()
    usuarioId: number;

    @Column({ length: 255, nullable: true })
    nacionalidad?: string;

    @Column({ length: 100, nullable: true })
    peso?: string;

    @Column({ length: 100, nullable: true })
    estatura?: string;
}
