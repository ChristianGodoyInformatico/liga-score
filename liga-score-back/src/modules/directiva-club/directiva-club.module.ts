import { Module } from '@nestjs/common';
import { DirectivaClubService } from './directiva-club.service';
import { DirectivaClubController } from './directiva-club.controller';
import { DirectivaClub } from './entities/directiva-club.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DirectivaClub])],
  controllers: [DirectivaClubController],
  providers: [DirectivaClubService],
})
export class DirectivaClubModule {}
