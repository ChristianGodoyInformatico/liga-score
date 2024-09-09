import { Connection } from 'typeorm';
import { PermisoUsuario } from '@/modules/permiso-usuario/entities/permiso-usuario.entity';

export class PermisoUsuarioSeed {
  public static async run(connection: Connection): Promise<void> {
    const permisoUsuarioRepository = connection.getRepository(PermisoUsuario);

    const permisosUsuarios = [
      { usuarioId: 1, permisoId: 1 },  // Suponiendo que el usuario con ID 1 tiene permiso ID 1
      { usuarioId: 1, permisoId: 2 },
      { usuarioId: 2, permisoId: 3 }
    ];

    for (const permisoUsuarioData of permisosUsuarios) {
      const permisoUsuario = permisoUsuarioRepository.create(permisoUsuarioData);
      await permisoUsuarioRepository.save(permisoUsuario);
    }

    console.log('Seed de permisos de usuarios completado');
  }
}
