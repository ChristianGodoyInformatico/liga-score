import { typeOrmModule } from './src/config/db.config'; // Asegúrate de la ruta correcta
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config(); // Cargar manualmente el archivo .env

// Instancia de ConfigService para acceder a las variables del archivo .env
const configService = new ConfigService();

export default new DataSource(typeOrmModule(configService));
