import { Module } from '@nestjs/common';
import { PermisoRolService } from './permiso-rol.service';
import { PermisoRolController } from './permiso-rol.controller';
import { PermisoRol } from './entities/permiso-rol.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PermisoRol])],
  controllers: [PermisoRolController],
  providers: [PermisoRolService],
})
export class PermisoRolModule {}
