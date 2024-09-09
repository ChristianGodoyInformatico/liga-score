import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateResultadoDto {
    @IsNumber()
    @IsNotEmpty({ message: 'El ID del encuentro es obligatorio' })
    encuentroId: number;  // FK hacia Encuentro

    @IsNumber()
    @IsNotEmpty({ message: 'El ID de la serie es obligatorio' })
    serieId: number;  // FK hacia Serie

    @IsNumber()
    @MaxLength(2)
    @IsNotEmpty({ message: 'Los goles del equipo local son obligatorios' })
    golesLocal: number;

    @IsNumber()
    @MaxLength(2)
    @IsNotEmpty({ message: 'Los goles del equipo visitante son obligatorios' })
    golesVisita: number;

    @IsArray()
    @IsNotEmpty({ message: 'La nómina del equipo local es obligatoria' })
    nominaLocal: object[];  // JSON con jugadores del equipo local

    @IsArray()
    @IsNotEmpty({ message: 'La nómina del equipo visitante es obligatoria' })
    nominaVisita: object[];  // JSON con jugadores del equipo visitante

    @IsArray()
    @IsOptional()
    eventos?: object[];  // JSON con amonestaciones, goles, etc.

    @IsString()
    @IsOptional()
    notas?: string;  // Texto grande para el reporte del árbitro (opcional)

    @IsNumber()
    @IsOptional()
    arbitroId?: number;  // FK hacia Árbitro (opcional)
}
