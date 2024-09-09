import { Injectable } from '@nestjs/common';
import { CreateArbitroDto } from './dto/create-arbitro.dto';
import { UpdateArbitroDto } from './dto/update-arbitro.dto';

@Injectable()
export class ArbitroService {
  create(createArbitroDto: CreateArbitroDto) {
    return 'This action adds a new arbitro';
  }

  findAll() {
    return `This action returns all arbitro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arbitro`;
  }

  update(id: number, updateArbitroDto: UpdateArbitroDto) {
    return `This action updates a #${id} arbitro`;
  }

  remove(id: number) {
    return `This action removes a #${id} arbitro`;
  }
}
