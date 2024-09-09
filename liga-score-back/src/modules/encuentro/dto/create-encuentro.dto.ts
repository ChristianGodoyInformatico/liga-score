import { Type } from "class-transformer";
import { IsArray, IsDate, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateEncuentroDto {
    @IsNumber()
    @IsNotEmpty({ message: 'El ID del equipo local es obligatorio' })
    localId: number;  // FK hacia Club (equipo local)

    @IsNumber()
    @IsNotEmpty({ message: 'El ID del equipo visitante es obligatorio' })
    visitaId: number;  // FK hacia Club (equipo visitante)

    @IsNumber()
    @IsNotEmpty({ message: 'El ID de la jornada es obligatorio' })
    jornadaId: number;  // FK hacia Jornada

    @IsNumber()
    @IsOptional()
    estadioId?: number;  // FK hacia Estadio (opcional)

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty({ message: 'La fecha del encuentro es obligatoria' })
    fecha: Date;

    @IsArray()
    @IsOptional()
    fechaSuspensiones?: object[];  // JSON con las fechas de suspensión (opcional)
}
