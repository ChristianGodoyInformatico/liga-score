import { Connection } from 'typeorm';
import { PermisoRol } from '@/modules/permiso-rol/entities/permiso-rol.entity';

export class PermisoRolSeed {
  public static async run(connection: Connection): Promise<void> {
    const permisoRolRepository = connection.getRepository(PermisoRol);

    const permisosRoles = [
      { rolId: 1, permisoId: 1 },  // Suponiendo que el rol con ID 1 (Admin) tiene el permiso ID 1
      { rolId: 1, permisoId: 2 },
      { rolId: 2, permisoId: 3 }   // Rol Usuario tiene permiso ID 3
    ];

    for (const permisoRolData of permisosRoles) {
      const permisoRol = permisoRolRepository.create(permisoRolData);
      await permisoRolRepository.save(permisoRol);
    }

    console.log('Seed de permisos de roles completado');
  }
}
