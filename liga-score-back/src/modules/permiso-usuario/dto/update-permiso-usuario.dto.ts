import { PartialType } from '@nestjs/mapped-types';
import { CreatePermisoUsuarioDto } from './create-permiso-usuario.dto';

export class UpdatePermisoUsuarioDto extends PartialType(CreatePermisoUsuarioDto) {}
