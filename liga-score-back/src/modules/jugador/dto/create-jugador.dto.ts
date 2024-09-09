import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateJugadorDto {
    @IsNumber()
    @IsNotEmpty({ message: 'El ID del usuario es obligatorio' })
    usuarioId: number;

    @IsString()
    @IsOptional()
    nacionalidad?: string;

    @IsString()
    @IsOptional()
    peso?: string;

    @IsString()
    @IsOptional()
    estatura?: string;
}
