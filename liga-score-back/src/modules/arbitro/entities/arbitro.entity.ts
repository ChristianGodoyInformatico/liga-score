import { BaseEntity } from "@/base.entity";
import { Usuario } from "@/modules/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('arbitros')
export class Arbitro extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @OneToOne(() => Usuario)
    @JoinColumn({ name: 'usuarioId' })
    usuario: Usuario;
  
    @Column()
    usuarioId: number;
}
