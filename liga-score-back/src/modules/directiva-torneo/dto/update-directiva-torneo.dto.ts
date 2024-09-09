import { PartialType } from '@nestjs/mapped-types';
import { CreateDirectivaTorneoDto } from './create-directiva-torneo.dto';

export class UpdateDirectivaTorneoDto extends PartialType(CreateDirectivaTorneoDto) {}
