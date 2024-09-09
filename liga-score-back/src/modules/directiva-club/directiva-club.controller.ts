import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DirectivaClubService } from './directiva-club.service';
import { CreateDirectivaClubDto } from './dto/create-directiva-club.dto';
import { UpdateDirectivaClubDto } from './dto/update-directiva-club.dto';

@Controller('directiva-club')
export class DirectivaClubController {
  constructor(private readonly directivaClubService: DirectivaClubService) {}

  @Post()
  create(@Body() createDirectivaClubDto: CreateDirectivaClubDto) {
    return this.directivaClubService.create(createDirectivaClubDto);
  }

  @Get()
  findAll() {
    return this.directivaClubService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directivaClubService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDirectivaClubDto: UpdateDirectivaClubDto) {
    return this.directivaClubService.update(+id, updateDirectivaClubDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.directivaClubService.remove(+id);
  }
}
