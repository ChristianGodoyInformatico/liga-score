import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TorneoService } from './torneo.service';
import { CreateTorneoDto } from './dto/create-torneo.dto';
import { UpdateTorneoDto } from './dto/update-torneo.dto';
import { Torneo } from './entities/torneo.entity';

@Controller('torneo')
export class TorneoController {
  constructor(private readonly torneoService: TorneoService) {}

  @Post()
  async create(@Body() createTorneoDto: CreateTorneoDto): Promise<Torneo> {
    return await this.torneoService.create(createTorneoDto);
  }

  @Get()
  findAll() {
    return this.torneoService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.torneoService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTorneoDto: UpdateTorneoDto) {
    return this.torneoService.update(id, updateTorneoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.torneoService.remove(id);
  }
}
