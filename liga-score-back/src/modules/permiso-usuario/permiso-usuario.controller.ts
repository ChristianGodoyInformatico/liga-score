import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermisoUsuarioService } from './permiso-usuario.service';
import { CreatePermisoUsuarioDto } from './dto/create-permiso-usuario.dto';
import { UpdatePermisoUsuarioDto } from './dto/update-permiso-usuario.dto';

@Controller('permiso-usuario')
export class PermisoUsuarioController {
  constructor(private readonly permisoUsuarioService: PermisoUsuarioService) {}

  @Post()
  create(@Body() createPermisoUsuarioDto: CreatePermisoUsuarioDto) {
    return this.permisoUsuarioService.create(createPermisoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.permisoUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permisoUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermisoUsuarioDto: UpdatePermisoUsuarioDto) {
    return this.permisoUsuarioService.update(+id, updatePermisoUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permisoUsuarioService.remove(+id);
  }
}
