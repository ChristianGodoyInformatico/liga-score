import { createConnection } from 'typeorm';
import { RolSeed } from './rol.seed';
import { PermisoSeed } from './permiso.seed';
import { PermisoUsuarioSeed } from './permiso-usuario.seed';
import { PermisoRolSeed } from './permiso-rol.seed';

(async () => {
  const connection = await createConnection();

  try {
    await RolSeed.run(connection);
    await PermisoSeed.run(connection);
    await PermisoUsuarioSeed.run(connection);
    await PermisoRolSeed.run(connection);

    console.log('Seeding completado');
  } catch (error) {
    console.error('Error durante el seeding:', error);
  } finally {
    await connection.close();
  }
})();
