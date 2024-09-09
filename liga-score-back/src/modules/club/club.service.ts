import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { Club } from './entities/club.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClubService {

  constructor(
    @InjectRepository(Club)
    private clubRepository: Repository<Club>,
  ) { }

  async create(createClubDto: CreateClubDto): Promise<Club> {
    const club = this.clubRepository.create(createClubDto);
    return await this.clubRepository.save(club);
  }

  async findAll(): Promise<Club[]> {
    return await this.clubRepository.find();
  }

  async findOneById(id: number): Promise<Club>{
    const club = await this.clubRepository.findOneBy({ id });

    if (!club) {
      throw new NotFoundException(`Club con el ID "${id}" no fue encontrado`);
    }

    return club;
  }

  async update(id: number, updateClubDto: UpdateClubDto): Promise<Club> {
    const club = await this.clubRepository.preload({
      id, // Aseguramos que estamos actualizando el objeto con este ID
      ...updateClubDto,
    });

    if (!club) {
      throw new NotFoundException(`Club con el ID ${id} no encontrado`);
    }

    return this.clubRepository.save(club); // Devuelve el objeto actualizado
  }

  async remove(id: number): Promise<void> {
    const club = await this.clubRepository.findOneBy({ id });

    if (!club) {
      throw new NotFoundException(`Club con el ID ${id} no encontrado`);
    }

    await this.clubRepository.softDelete(id);
  }
}
