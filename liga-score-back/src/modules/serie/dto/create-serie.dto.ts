import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateSerieDto {
    @IsString({ message: 'El nombre debe ser de tipo texto.'})
    @MinLength(1, { message: 'El nombre debe tener por lo menos un caracter.'})
    @IsNotEmpty({ message: 'El nombre del torneo es requerido.' })
    nombre: string;

    @IsString({ message: 'La descripcion debe ser de tipo texto.'})
    @IsOptional()
    descripcion: string;
}
