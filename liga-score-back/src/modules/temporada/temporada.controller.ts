import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TemporadaService } from './temporada.service';
import { CreateTemporadaDto } from './dto/create-temporada.dto';
import { UpdateTemporadaDto } from './dto/update-temporada.dto';

@Controller('temporada')
export class TemporadaController {
  constructor(private readonly temporadaService: TemporadaService) {}

  @Post()
  create(@Body() createTemporadaDto: CreateTemporadaDto) {
    return this.temporadaService.create(createTemporadaDto);
  }

  @Get()
  findAll() {
    return this.temporadaService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.temporadaService.findOne(+id);
  // }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.temporadaService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTemporadaDto: UpdateTemporadaDto) {
    return this.temporadaService.update(+id, updateTemporadaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.temporadaService.remove(+id);
  }
}
