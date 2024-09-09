import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDirectivaTorneoDto {
    @IsNumber()
    @IsNotEmpty({ message: 'El ID del usuario es obligatorio' })
    usuarioId: number;

    @IsNumber()
    @IsNotEmpty({ message: 'El ID del torneo es obligatorio' })
    torneoId: number;

    @IsString()
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    contraseña: string;

    @IsString()
    @IsNotEmpty({ message: 'El cargo es obligatorio' })
    cargo: string;
}
