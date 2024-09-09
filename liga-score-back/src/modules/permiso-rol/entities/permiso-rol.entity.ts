import { BaseEntity } from "@/base.entity";
import { Permiso } from "@/modules/permiso/entities/permiso.entity";
import { Rol } from "@/modules/rol/entities/rol.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('permisos_roles')
export class PermisoRol extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Rol, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'rolId' })
    rol: Rol;

    @Column()
    rolId: number;

    @ManyToOne(() => Permiso, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'permisoId' })
    permiso: Permiso;

    @Column()
    permisoId: number;
}
