import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermissionService } from '../../permission/permission.service';
import { AttachPermissionForRoleDto } from '../dto/attact-permission-for-role.dto';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RoleEntity } from '../entities/role.entity';
import { formatRolePermissionData } from '../utils/format-role-permission.util';
import { RolePermissionService } from './role-permission.service';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepo: Repository<RoleEntity>,
    private permissionService: PermissionService,
    private rolePermissionService: RolePermissionService,
  ) {}

  create(createRoleDto: CreateRoleDto) {
    return this.roleRepo.save(this.roleRepo.create(createRoleDto));
  }

  findAll() {
    return this.roleRepo.find();
  }

  async findOne(id: number) {
    const role = await this.roleRepo.findOneBy({ id });
    if (!role) throw new HttpException('Role Not Found!', HttpStatus.NOT_FOUND);
    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    await this.roleRepo.update(id, updateRoleDto);
    return this.roleRepo.findOneBy({ id });
  }

  async attachPermissionForRole(
    attachPermissionForRole: AttachPermissionForRoleDto,
  ) {
    const { roleId, permissionIds } = attachPermissionForRole;
    // check exist
    const role = await this.findOne(roleId);
    const permissions = await this.permissionService.find({ permissionIds });
    if (permissions.list.length === 0) {
      throw new HttpException('Permissions is empty!', HttpStatus.NOT_FOUND);
    }

    // handle attach permission to role
    const createRolePermissionDtos = formatRolePermissionData(
      permissionIds,
      roleId,
    );
    const rolePermissions = await this.rolePermissionService.createMultiple(
      createRolePermissionDtos,
    );
    return rolePermissions;
  }

  remove(id: number) {
    return this.roleRepo.delete({ id });
  }
}
