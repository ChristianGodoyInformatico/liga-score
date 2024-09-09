import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateClubDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;
  
    @IsString()
    @IsNotEmpty()
    sector: string;
  
    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    fechaInauguracion: Date;
  
    @IsString()
    @IsOptional()
    escudoPath?: string;
  
    @IsString()
    @IsOptional()
    escudoNombreArchivo?: string;
  
    @IsString()
    @IsOptional()
    alias?: string;
  
    @IsOptional()
    estadioId?: number; 
}
