import { PartialType } from '@nestjs/mapped-types';
import { CreateDirectivaClubDto } from './create-directiva-club.dto';

export class UpdateDirectivaClubDto extends PartialType(CreateDirectivaClubDto) {}
