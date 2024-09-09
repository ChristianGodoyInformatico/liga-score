import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermisoRolService } from './permiso-rol.service';
import { CreatePermisoRolDto } from './dto/create-permiso-rol.dto';
import { UpdatePermisoRolDto } from './dto/update-permiso-rol.dto';

@Controller('permiso-rol')
export class PermisoRolController {
  constructor(private readonly permisoRolService: PermisoRolService) {}

  @Post()
  create(@Body() createPermisoRolDto: CreatePermisoRolDto) {
    return this.permisoRolService.create(createPermisoRolDto);
  }

  @Get()
  findAll() {
    return this.permisoRolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permisoRolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermisoRolDto: UpdatePermisoRolDto) {
    return this.permisoRolService.update(+id, updatePermisoRolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permisoRolService.remove(+id);
  }
}
