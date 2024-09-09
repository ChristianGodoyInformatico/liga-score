import { Injectable } from '@nestjs/common';
import { CreatePermisoUsuarioDto } from './dto/create-permiso-usuario.dto';
import { UpdatePermisoUsuarioDto } from './dto/update-permiso-usuario.dto';

@Injectable()
export class PermisoUsuarioService {
  create(createPermisoUsuarioDto: CreatePermisoUsuarioDto) {
    return 'This action adds a new permisoUsuario';
  }

  findAll() {
    return `This action returns all permisoUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permisoUsuario`;
  }

  update(id: number, updatePermisoUsuarioDto: UpdatePermisoUsuarioDto) {
    return `This action updates a #${id} permisoUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} permisoUsuario`;
  }
}
