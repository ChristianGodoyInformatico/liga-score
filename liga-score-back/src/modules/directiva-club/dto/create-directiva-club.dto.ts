import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDirectivaClubDto {
    @IsNumber()
    @IsNotEmpty({ message: 'El ID del usuario es obligatorio' })
    usuarioId: number;

    @IsNumber()
    @IsNotEmpty({ message: 'El ID del club es obligatorio' })
    clubId: number;

    @IsString()
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    contraseña: string;

    @IsString()
    @IsNotEmpty({ message: 'El cargo es obligatorio' })
    cargo: string;

    @IsBoolean()
    @IsOptional()
    habilitado?: boolean;
}
