import { Injectable } from '@nestjs/common';
import { CreateEncuentroDto } from './dto/create-encuentro.dto';
import { UpdateEncuentroDto } from './dto/update-encuentro.dto';

@Injectable()
export class EncuentroService {
  create(createEncuentroDto: CreateEncuentroDto) {
    return 'This action adds a new encuentro';
  }

  findAll() {
    return `This action returns all encuentro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} encuentro`;
  }

  update(id: number, updateEncuentroDto: UpdateEncuentroDto) {
    return `This action updates a #${id} encuentro`;
  }

  remove(id: number) {
    return `This action removes a #${id} encuentro`;
  }
}
