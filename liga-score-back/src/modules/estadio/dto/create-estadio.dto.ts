import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEstadioDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;
  
    @IsString()
    @IsNotEmpty()
    direccion: string;
  
    @IsString()
    @IsOptional()
    imagenPath?: string;
  
    @IsString()
    @IsOptional()
    imagenNombreArchivo?: string;
}
