import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from 'src/environments';
import { BranchEntity } from 'src/modules/company/branch/entities/branch.entity';
import { CompanyEntity } from 'src/modules/company/entities/company.entity';
import { CommentEntity } from 'src/modules/social-network/comment/entities/comment.entity';
import { PostEntity } from 'src/modules/social-network/post/entities/post.entity';
import { PermissionEntity } from 'src/modules/user-management/permission/entities/permission.entity';
import {
  RoleEntity,
  RolePermissionEntity,
} from 'src/modules/user-management/role/entities/role.entity';
import { UserEntity } from 'src/modules/user-management/user/entities/user.entity';
const entities = [
  CompanyEntity,
  UserEntity,
  BranchEntity,
  PermissionEntity,
  RoleEntity,
  RolePermissionEntity,
  PostEntity,
  CommentEntity,
];
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
        logging: true,
        // logger: new DBLogger(),
      }),
    }),
  ],
})
export class TypeOrmConfigModule {}
