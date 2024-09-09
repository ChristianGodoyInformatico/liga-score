import { Connection } from 'typeorm';
import { Permiso } from '@/modules/permiso/entities/permiso.entity';

export class PermisoSeed {
  public static async run(connection: Connection): Promise<void> {
    const permisoRepository = connection.getRepository(Permiso);
    
    const permisos = [
      { modulo: 'usuarios', accion: 'crear', descripcion: 'Crear usuarios' },
      { modulo: 'usuarios', accion: 'editar', descripcion: 'Editar usuarios' },
      { modulo: 'usuarios', accion: 'eliminar', descripcion: 'Eliminar usuarios' },
      { modulo: 'torneo', accion: 'crear', descripcion: 'Crear roles' },
      { modulo: 'torneo', accion: 'editar', descripcion: 'Editar roles' }
    ];

    for (const permisoData of permisos) {
      const permiso = permisoRepository.create(permisoData);
      await permisoRepository.save(permiso);
    }

    console.log('Seed de permisos completado');
  }
}
