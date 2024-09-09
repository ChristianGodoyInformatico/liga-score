import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmModule } from './config/db.config';
import { TorneoModule } from './modules/torneo/torneo.module';
import { TemporadaModule } from './modules/temporada/temporada.module';
import { SerieModule } from './modules/serie/serie.module';
import { EstadioModule } from './modules/estadio/estadio.module';
import { ClubModule } from './modules/club/club.module';
import { JornadaModule } from './modules/jornada/jornada.module';
import { EncuentroModule } from './modules/encuentro/encuentro.module';
import { ResultadoModule } from './modules/resultado/resultado.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { DirectivaClubModule } from './modules/directiva-club/directiva-club.module';
import { DirectivaTorneoModule } from './modules/directiva-torneo/directiva-torneo.module';
import { JugadorModule } from './modules/jugador/jugador.module';
import { ArbitroModule } from './modules/arbitro/arbitro.module';
import { RolModule } from './modules/rol/rol.module';
import { PermisoModule } from './modules/permiso/permiso.module';
import { PermisoUsuarioModule } from './modules/permiso-usuario/permiso-usuario.module';
import { PermisoRolModule } from './modules/permiso-rol/permiso-rol.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de entorno estén disponibles globalmente
    }),
    
    // Configuracion de conexion con BD Postgres
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeOrmModule,
    }),
    
    TorneoModule,
    
    TemporadaModule,
    
    SerieModule,
        
    EstadioModule,
    
    ClubModule,
    
    JornadaModule,
    
    EncuentroModule,
    
    ResultadoModule,
    
    UsuarioModule,
    
    DirectivaClubModule,
    
    DirectivaTorneoModule,
    
    JugadorModule,
    
    ArbitroModule,
    
    RolModule,
    
    PermisoModule,
    
    PermisoUsuarioModule,
    
    PermisoRolModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
