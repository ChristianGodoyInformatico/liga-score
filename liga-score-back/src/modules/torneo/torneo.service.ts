import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTorneoDto } from './dto/create-torneo.dto';
import { UpdateTorneoDto } from './dto/update-torneo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Torneo } from './entities/torneo.entity';

@Injectable()
export class TorneoService {

  constructor(
    @InjectRepository(Torneo)
    private torneoRepository: Repository<Torneo>,
  ) { }

  async create(createTorneoDto: CreateTorneoDto): Promise<Torneo> {
    const torneo = this.torneoRepository.create(createTorneoDto);
    return await this.torneoRepository.save(torneo);
  }

  async findAll(): Promise<Torneo[]> {
    return await this.torneoRepository.find();
  }

  async findOneById(id: number): Promise<Torneo>{
    const torneo = await this.torneoRepository.findOneBy({ id });

    if (!torneo) {
      throw new NotFoundException(`Torneo con el ID "${id}" no fue encontrado`);
    }

    return torneo;
  }

  async update(id: number, updateTorneoDto: UpdateTorneoDto): Promise<Torneo> {
    const torneo = await this.torneoRepository.preload({
      id, // Aseguramos que estamos actualizando el objeto con este ID
      ...updateTorneoDto,
    });

    if (!torneo) {
      throw new NotFoundException(`Torneo con el ID ${id} no encontrado`);
    }

    return this.torneoRepository.save(torneo); // Devuelve el objeto actualizado
  }

  async remove(id: number): Promise<void> {
    const torneo = await this.torneoRepository.findOneBy({ id });

    if (!torneo) {
      throw new NotFoundException(`Torneo con el ID ${id} no encontrado`);
    }

    await this.torneoRepository.softDelete(id);
  }
}
