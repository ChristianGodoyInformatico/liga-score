import { Injectable } from '@nestjs/common';
import { CreateDirectivaTorneoDto } from './dto/create-directiva-torneo.dto';
import { UpdateDirectivaTorneoDto } from './dto/update-directiva-torneo.dto';

@Injectable()
export class DirectivaTorneoService {
  create(createDirectivaTorneoDto: CreateDirectivaTorneoDto) {
    return 'This action adds a new directivaTorneo';
  }

  findAll() {
    return `This action returns all directivaTorneo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} directivaTorneo`;
  }

  update(id: number, updateDirectivaTorneoDto: UpdateDirectivaTorneoDto) {
    return `This action updates a #${id} directivaTorneo`;
  }

  remove(id: number) {
    return `This action removes a #${id} directivaTorneo`;
  }
}
