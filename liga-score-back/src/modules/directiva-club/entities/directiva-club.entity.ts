import { BaseEntity } from "@/base.entity";
import { Club } from "@/modules/club/entities/club.entity";
import { Usuario } from "@/modules/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('directiva_club')
export class DirectivaClub extends BaseEntity{
    @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'usuarioId' })
  usuario: Usuario;

  @Column()
  usuarioId: number;

  @ManyToOne(() => Club, (club) => club.directivaClubs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'clubId' })
  club: Club;

  @Column()
  clubId: number;

  @Column({ length: 255 })
  contraseña: string;

  @Column({ length: 255 })
  cargo: string;

  @Column({ default: true })
  habilitado: boolean;
}
