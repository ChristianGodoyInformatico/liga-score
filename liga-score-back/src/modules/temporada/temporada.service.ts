import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTemporadaDto } from './dto/create-temporada.dto';
import { UpdateTemporadaDto } from './dto/update-temporada.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Temporada } from './entities/temporada.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TemporadaService {

  constructor(
    @InjectRepository(Temporada)
    private temporadaRepository: Repository<Temporada>,
  ) { }

  async create(createTemporadaDto: CreateTemporadaDto): Promise<Temporada> {
    const temporada = this.temporadaRepository.create(createTemporadaDto);
    return await this.temporadaRepository.save(temporada);
  }

  async findAll(): Promise<Temporada[]> {
    return await this.temporadaRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} temporada`;
  // }

  async findOneById(id: number): Promise<Temporada> {
    const temporada = await this.temporadaRepository.findOneBy({ id });

    if (!temporada) {
      throw new NotFoundException(`Temporada con el ID "${id}" no fue encontrado`);
    }

    return temporada;
  }

  async update(id: number, updateTemporadaDto: UpdateTemporadaDto): Promise<Temporada> {
    const temporada = await this.temporadaRepository.preload({
      id, // Aseguramos que estamos actualizando el objeto con este ID
      ...updateTemporadaDto,
    });

    if (!temporada) {
      throw new NotFoundException(`Temporada con el ID ${id} no encontrado`);
    }

    return this.temporadaRepository.save(temporada); // Devuelve el objeto actualizado
  }

  async remove(id: number): Promise<void> {
    const temporada = await this.temporadaRepository.findOneBy({ id });

    if (!temporada) {
      throw new NotFoundException(`Temporada con el ID ${id} no encontrado`);
    }

    await this.temporadaRepository.softDelete(id);
  }
}
