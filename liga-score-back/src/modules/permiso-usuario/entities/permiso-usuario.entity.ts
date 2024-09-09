import { BaseEntity } from "@/base.entity";
import { Permiso } from "@/modules/permiso/entities/permiso.entity";
import { Usuario } from "@/modules/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('permisos_usuarios')
export class PermisoUsuario extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'usuarioId' })
    usuario: Usuario;
  
    @Column()
    usuarioId: number;
  
    @ManyToOne(() => Permiso, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'permisoId' })
    permiso: Permiso;
  
    @Column()
    permisoId: number;
}
