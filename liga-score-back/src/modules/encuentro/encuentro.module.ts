import { Module } from '@nestjs/common';
import { EncuentroService } from './encuentro.service';
import { EncuentroController } from './encuentro.controller';
import { Encuentro } from './entities/encuentro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Encuentro])],
  controllers: [EncuentroController],
  providers: [EncuentroService],
})
export class EncuentroModule {}
