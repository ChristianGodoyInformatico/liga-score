import { Module } from '@nestjs/common';
import { JornadaService } from './jornada.service';
import { JornadaController } from './jornada.controller';
import { Jornada } from './entities/jornada.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Jornada])],
  controllers: [JornadaController],
  providers: [JornadaService],
})
export class JornadaModule {}
