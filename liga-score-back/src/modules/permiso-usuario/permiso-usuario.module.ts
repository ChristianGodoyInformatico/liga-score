import { Module } from '@nestjs/common';
import { PermisoUsuarioService } from './permiso-usuario.service';
import { PermisoUsuarioController } from './permiso-usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermisoUsuario } from './entities/permiso-usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PermisoUsuario])],
  controllers: [PermisoUsuarioController],
  providers: [PermisoUsuarioService],
})
export class PermisoUsuarioModule {}
