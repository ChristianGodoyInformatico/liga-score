import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateArbitroDto {
    @IsNumber()
    @IsNotEmpty({ message: 'El ID del usuario es obligatorio' })
    usuarioId: number;
}
