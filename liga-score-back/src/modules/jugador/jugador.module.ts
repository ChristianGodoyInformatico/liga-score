import { Module } from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { JugadorController } from './jugador.controller';
import { Jugador } from './entities/jugador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Jugador])],
  controllers: [JugadorController],
  providers: [JugadorService],
})
export class JugadorModule {}
