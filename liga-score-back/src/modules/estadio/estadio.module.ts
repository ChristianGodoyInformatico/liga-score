import { Module } from '@nestjs/common';
import { EstadioService } from './estadio.service';
import { EstadioController } from './estadio.controller';
import { Estadio } from './entities/estadio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Estadio])],
  controllers: [EstadioController],
  providers: [EstadioService],
})
export class EstadioModule {}
