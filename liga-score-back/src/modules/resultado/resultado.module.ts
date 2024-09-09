import { Module } from '@nestjs/common';
import { ResultadoService } from './resultado.service';
import { ResultadoController } from './resultado.controller';
import { Resultado } from './entities/resultado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Resultado])],
  controllers: [ResultadoController],
  providers: [ResultadoService],
})
export class ResultadoModule {}
