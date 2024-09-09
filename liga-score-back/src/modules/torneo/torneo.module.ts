import { Module } from '@nestjs/common';
import { TorneoService } from './torneo.service';
import { TorneoController } from './torneo.controller';
import { Torneo } from './entities/torneo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Torneo])],
  providers: [TorneoService],
  controllers: [TorneoController],
})
export class TorneoModule {}
