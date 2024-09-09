import { Module } from '@nestjs/common';
import { DirectivaTorneoService } from './directiva-torneo.service';
import { DirectivaTorneoController } from './directiva-torneo.controller';
import { DirectivaTorneo } from './entities/directiva-torneo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DirectivaTorneo])],
  controllers: [DirectivaTorneoController],
  providers: [DirectivaTorneoService],
})
export class DirectivaTorneoModule {}
