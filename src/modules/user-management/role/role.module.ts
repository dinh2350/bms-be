import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionModule } from '../permission/permission.module';
import { RoleEntity, RolePermissionEntity } from './entities/role.entity';
import { RoleController } from './role.controller';
import { RolePermissionService } from './services/role-permission.service';
import { RoleService } from './services/role.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoleEntity, RolePermissionEntity]),
    PermissionModule,
  ],
  controllers: [RoleController],
  providers: [RoleService, RolePermissionService],
})
export class RoleModule {}
