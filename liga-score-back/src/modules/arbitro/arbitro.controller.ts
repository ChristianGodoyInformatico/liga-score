import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArbitroService } from './arbitro.service';
import { CreateArbitroDto } from './dto/create-arbitro.dto';
import { UpdateArbitroDto } from './dto/update-arbitro.dto';

@Controller('arbitro')
export class ArbitroController {
  constructor(private readonly arbitroService: ArbitroService) {}

  @Post()
  create(@Body() createArbitroDto: CreateArbitroDto) {
    return this.arbitroService.create(createArbitroDto);
  }

  @Get()
  findAll() {
    return this.arbitroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arbitroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArbitroDto: UpdateArbitroDto) {
    return this.arbitroService.update(+id, updateArbitroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arbitroService.remove(+id);
  }
}
