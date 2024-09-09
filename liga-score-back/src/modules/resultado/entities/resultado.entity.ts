import { BaseEntity } from "@/base.entity";
import { Encuentro } from "@/modules/encuentro/entities/encuentro.entity";
import { Serie } from "@/modules/serie/entities/serie.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('resultados')
export class Resultado extends BaseEntity{
    @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Encuentro, (encuentro) => encuentro.resultados, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'encuentroId' })
  encuentro: Encuentro;

  @ManyToOne(() => Serie, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'serieId' })
  serie: Serie;

  @Column({ type: 'int' })
  golesLocal: number;

  @Column({ type: 'int' })
  golesVisita: number;

  @Column({ type: 'jsonb' })
  nominaLocal: object[];  // Lista de jugadores del equipo local

  @Column({ type: 'jsonb' })
  nominaVisita: object[];  // Lista de jugadores del equipo visitante

  @Column({ type: 'jsonb' })
  eventos: object[];  // Amonestaciones, goles, etc.

  @Column({ type: 'text', nullable: true })
  notas: string;  // Reporte del árbitro

//   @ManyToOne(() => Arbitro, { onDelete: 'SET NULL', nullable: true })  // Relación con Árbitro
//   @JoinColumn({ name: 'arbitroId' })
//   arbitro: Arbitro;  // Relación con la tabla de Árbitros
}
