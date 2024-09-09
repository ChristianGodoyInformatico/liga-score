import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EstadioService } from './estadio.service';
import { CreateEstadioDto } from './dto/create-estadio.dto';
import { UpdateEstadioDto } from './dto/update-estadio.dto';
import { Estadio } from './entities/estadio.entity';

@Controller('estadio')
export class EstadioController {
  constructor(private readonly estadioService: EstadioService) {}

  @Post()
  async create(@Body() createEstadioDto: CreateEstadioDto): Promise<Estadio> {
    return await this.estadioService.create(createEstadioDto);
  }

  @Get()
  findAll() {
    return this.estadioService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.estadioService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateEstadioDto: UpdateEstadioDto) {
    return this.estadioService.update(id, updateEstadioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.estadioService.remove(id);
  }
}
