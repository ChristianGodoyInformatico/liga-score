import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateJornadaDto {
    @IsString({ message: 'El nombre de la jornada debe ser de tipo texto.'})
    @IsNotEmpty({ message: 'El nombre de la jornada es obligatorio' })
    nombre: string;
  
    @IsNumber()
    @IsNotEmpty({ message: 'El ID de la temporada es obligatorio' })
    temporadaId: number;
}
