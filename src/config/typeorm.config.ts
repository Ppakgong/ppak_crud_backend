import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mingyeongho',
  password: 'alsrudgh1',
  database: 'ppakcommunity',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
