import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SerieService } from './serie.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { Serie } from './entities/serie.entity';

@Controller('serie')
export class SerieController {
  constructor(private readonly serieService: SerieService) {}

  @Post()
  async create(@Body() createSerieDto: CreateSerieDto): Promise<Serie> {
    return await this.serieService.create(createSerieDto);
  }

  @Get()
  findAll() {
    return this.serieService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.serieService.findOneById(id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.serieService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateSerieDto: UpdateSerieDto) {
    return this.serieService.update(id, updateSerieDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.serieService.remove(id);
  }
}
