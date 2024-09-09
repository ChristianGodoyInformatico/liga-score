import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Serie } from './entities/serie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SerieService {

  constructor(
    @InjectRepository(Serie)
    private serieRepository: Repository<Serie>,
  ) { }
  
  async create(createSerieDto: CreateSerieDto): Promise<Serie> {
    const serie = this.serieRepository.create(createSerieDto);
    return await this.serieRepository.save(serie);
  }

  async findAll(): Promise<Serie[]> {
    return await this.serieRepository.find();
  }

  async findOneById(id: number): Promise<Serie>{
    const serie = await this.serieRepository.findOneBy({ id });

    if (!serie) {
      throw new NotFoundException(`Serie con el ID "${id}" no fue encontrado`);
    }

    return serie;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} serie`;
  // }

  async update(id: number, updateSerieDto: UpdateSerieDto): Promise<Serie> {
    const serie = await this.serieRepository.preload({
      id, // Aseguramos que estamos actualizando el objeto con este ID
      ...updateSerieDto,
    });

    if (!serie) {
      throw new NotFoundException(`Serie con el ID ${id} no encontrado`);
    }

    return this.serieRepository.save(serie); // Devuelve el objeto actualizado
  }

  async remove(id: number): Promise<void> {
    const serie = await this.serieRepository.findOneBy({ id });

    if (!serie) {
      throw new NotFoundException(`Serie con el ID ${id} no encontrado`);
    }

    await this.serieRepository.softDelete(id);
  }
}
