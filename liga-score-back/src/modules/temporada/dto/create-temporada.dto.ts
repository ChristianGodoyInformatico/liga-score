import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTemporadaDto {

    @IsString({ message: 'El nombre de la temporada debe ser de tipo texto' })
    @MinLength(1, { message: 'El nombre de la temporada no puede venir vacia' })
    @MaxLength(100, { message: 'El maximo de caracteres para el nombre de la temporada es de 100' })
    @IsNotEmpty({ message: 'El nombre de la temporada es requerida' })
    nombre;

    @IsString()
    @IsOptional()
    reglamentoPath;

    @IsString()
    @IsOptional()
    reglamentoNombreArchivo;

    @IsNotEmpty({ message: 'El torneoId es obligatorio' })
    torneoId: number;
}
