import { Type } from "class-transformer";
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    nombres: string;

    @IsString()
    @IsNotEmpty({ message: 'Los apellidos son obligatorios' })
    apellidos: string;

    @IsString()
    @IsNotEmpty({ message: 'El RUT es obligatorio' })
    rut: string;

    @IsOptional()
    @Type(() => Date)
    fechaNacimiento?: Date;

    @IsEmail({}, { message: 'Correo electrónico no válido' })
    @IsOptional()
    correo?: string;

    @IsString()
    @IsOptional()
    fotoPath?: string;

    @IsString()
    @IsOptional()
    fotoNombreArchivo?: string;

    @IsString()
    @IsOptional()
    direccion?: string;

    @IsBoolean()
    @IsOptional()
    habilitado?: boolean;
}
