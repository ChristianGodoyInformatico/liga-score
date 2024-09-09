import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstadioDto } from './dto/create-estadio.dto';
import { UpdateEstadioDto } from './dto/update-estadio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estadio } from './entities/estadio.entity';

@Injectable()
export class EstadioService {
  constructor(
    @InjectRepository(Estadio)
    private estadioRepository: Repository<Estadio>,
  ) { }
  
  async create(createEstadioDto: CreateEstadioDto): Promise<Estadio> {
    const estadio = this.estadioRepository.create(createEstadioDto);
    return await this.estadioRepository.save(estadio);
  }

  async findAll(): Promise<Estadio[]> {
    return await this.estadioRepository.find();
  }

  async findOneById(id: number): Promise<Estadio>{
    const estadio = await this.estadioRepository.findOneBy({ id });

    if (!estadio) {
      throw new NotFoundException(`Estadio con el ID "${id}" no fue encontrado`);
    }

    return estadio;
  }

  async update(id: number, updateEstadioDto: UpdateEstadioDto): Promise<Estadio> {
    const estadio = await this.estadioRepository.preload({
      id, // Aseguramos que estamos actualizando el objeto con este ID
      ...updateEstadioDto,
    });

    if (!estadio) {
      throw new NotFoundException(`Estadio con el ID ${id} no encontrado`);
    }

    return this.estadioRepository.save(estadio); // Devuelve el objeto actualizado
  }

  async remove(id: number): Promise<void> {
    const estadio = await this.estadioRepository.findOneBy({ id });

    if (!estadio) {
      throw new NotFoundException(`Estadio con el ID ${id} no encontrado`);
    }

    await this.estadioRepository.softDelete(id);
  }
}
