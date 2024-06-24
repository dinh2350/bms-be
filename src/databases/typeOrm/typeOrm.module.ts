import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from 'src/environments';
import { CompanyEntity } from 'src/modules/company/entities/company.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
const entities = [CompanyEntity, UserEntity];
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: DB_HOST,
        port: DB_PORT,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        entities,
        synchronize: true,
        logging: false,
        // logger: new DBLogger(),
      }),
    }),
  ],
})
export class TypeOrmConfigModule {}
