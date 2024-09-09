import { Injectable } from '@nestjs/common';
import { CreateDirectivaClubDto } from './dto/create-directiva-club.dto';
import { UpdateDirectivaClubDto } from './dto/update-directiva-club.dto';

@Injectable()
export class DirectivaClubService {
  create(createDirectivaClubDto: CreateDirectivaClubDto) {
    return 'This action adds a new directivaClub';
  }

  findAll() {
    return `This action returns all directivaClub`;
  }

  findOne(id: number) {
    return `This action returns a #${id} directivaClub`;
  }

  update(id: number, updateDirectivaClubDto: UpdateDirectivaClubDto) {
    return `This action updates a #${id} directivaClub`;
  }

  remove(id: number) {
    return `This action removes a #${id} directivaClub`;
  }
}
