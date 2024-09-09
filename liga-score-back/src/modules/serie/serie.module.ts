import { Module } from '@nestjs/common';
import { SerieService } from './serie.service';
import { SerieController } from './serie.controller';
import { Serie } from './entities/serie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Serie])],
  controllers: [SerieController],
  providers: [SerieService],
})
export class SerieModule {}
