import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolePermissionDto } from '../dto/create-role-permission.dto';
import { RolePermissionEntity } from '../entities/role.entity';

@Injectable()
export class RolePermissionService {
  constructor(
    @InjectRepository(RolePermissionEntity)
    private readonly rolePermissionRepo: Repository<RolePermissionEntity>,
  ) {}

  create(createRolePermissionDto: CreateRolePermissionDto) {
    return this.rolePermissionRepo.save(
      this.rolePermissionRepo.create(createRolePermissionDto),
    );
  }

  createMultiple(createRolePermissionDtos: CreateRolePermissionDto[]) {
    return Promise.all(
      createRolePermissionDtos.map(
        (createRolePermissionDto: CreateRolePermissionDto) => {
          return this.create(createRolePermissionDto);
        },
      ),
    );
  }
}
