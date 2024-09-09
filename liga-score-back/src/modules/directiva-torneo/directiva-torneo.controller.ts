import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DirectivaTorneoService } from './directiva-torneo.service';
import { CreateDirectivaTorneoDto } from './dto/create-directiva-torneo.dto';
import { UpdateDirectivaTorneoDto } from './dto/update-directiva-torneo.dto';

@Controller('directiva-torneo')
export class DirectivaTorneoController {
  constructor(private readonly directivaTorneoService: DirectivaTorneoService) {}

  @Post()
  create(@Body() createDirectivaTorneoDto: CreateDirectivaTorneoDto) {
    return this.directivaTorneoService.create(createDirectivaTorneoDto);
  }

  @Get()
  findAll() {
    return this.directivaTorneoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directivaTorneoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDirectivaTorneoDto: UpdateDirectivaTorneoDto) {
    return this.directivaTorneoService.update(+id, updateDirectivaTorneoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.directivaTorneoService.remove(+id);
  }
}
