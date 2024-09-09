import { Injectable } from '@nestjs/common';
import { CreatePermisoRolDto } from './dto/create-permiso-rol.dto';
import { UpdatePermisoRolDto } from './dto/update-permiso-rol.dto';

@Injectable()
export class PermisoRolService {
  create(createPermisoRolDto: CreatePermisoRolDto) {
    return 'This action adds a new permisoRol';
  }

  findAll() {
    return `This action returns all permisoRol`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permisoRol`;
  }

  update(id: number, updatePermisoRolDto: UpdatePermisoRolDto) {
    return `This action updates a #${id} permisoRol`;
  }

  remove(id: number) {
    return `This action removes a #${id} permisoRol`;
  }
}
