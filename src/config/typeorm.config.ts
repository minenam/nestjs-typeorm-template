import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeOrmAsyncModuleOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => ({
    namingStrategy: new SnakeNamingStrategy(),
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: process.env.MODE == 'dev', //! set 'false' in production
    autoLoadEntities: true,
    logging: process.env.MODE == 'dev',
  }),
};
