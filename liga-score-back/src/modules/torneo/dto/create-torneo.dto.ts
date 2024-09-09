import { IsString, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateTorneoDto {
  @IsString({ message: 'El nombre debe ser de tipo texto.' })
  @MinLength(1, { message: 'El nombre debe poseer por lo menos un caracter.'})
  @IsNotEmpty({ message: 'El nombre del torneo es requerido.' })
  nombre: string;

  @IsString({ message: 'La descripcion debe ser de tipo texto.'})
  @IsOptional()
  descripcion: string;

  @IsString({ message: 'La ubicacion debe ser de tipo texto.'})
  @MinLength(1, { message: 'La ubicacion debe tener por lo menos un caracter.'})
  @IsNotEmpty({ message: 'La ubicacion del torneo es requerida.' })
  ubicacion: string;
}
