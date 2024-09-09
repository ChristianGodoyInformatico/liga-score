import { Module } from '@nestjs/common';
import { ArbitroService } from './arbitro.service';
import { ArbitroController } from './arbitro.controller';
import { Arbitro } from './entities/arbitro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Arbitro])],
  controllers: [ArbitroController],
  providers: [ArbitroService],
})
export class ArbitroModule {}
