import { BaseEntity } from "@/base.entity";
import { Torneo } from "@/modules/torneo/entities/torneo.entity";
import { Usuario } from "@/modules/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('directiva_torneo')
export class DirectivaTorneo extends BaseEntity{
    @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'usuarioId' })
  usuario: Usuario;

  @ManyToOne(() => Torneo, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'torneoId' })
  torneo: Torneo;

  @Column()
  torneoId: number;

  @Column()
  usuarioId: number;

  @Column({ length: 255 })
  contraseña: string;

  @Column({ length: 255 })
  cargo: string;
}
