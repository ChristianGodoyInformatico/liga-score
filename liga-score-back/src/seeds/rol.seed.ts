import { Connection } from 'typeorm';
import { Rol } from '@/modules/rol/entities/rol.entity';

export class RolSeed {
  public static async run(connection: Connection): Promise<void> {
    const rolRepository = connection.getRepository(Rol);
    
    const roles = [
      { nombre: 'Admin', descripcion: 'Administrador del sistema' },
      { nombre: 'Usuario', descripcion: 'Usuario estándar del sistema' },
    //   { nombre: 'Directiva', descripcion: 'Miembro de la directiva' }
    ];

    for (const rolData of roles) {
      const rol = rolRepository.create(rolData);
      await rolRepository.save(rol);
    }

    console.log('Seed de roles completado');
  }
}
