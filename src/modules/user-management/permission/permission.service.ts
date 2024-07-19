import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { QueryPermissionDto } from './dto/query-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PermissionEntity } from './entities/permission.entity';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(PermissionEntity)
    private readonly permissionRepo: Repository<PermissionEntity>,
  ) {}
  create(createPermissionDto: CreatePermissionDto) {
    return this.permissionRepo.save(
      this.permissionRepo.create(createPermissionDto),
    );
  }

  async find(queryPermissionDto: QueryPermissionDto) {
    const { permissionIds, page, limit } = queryPermissionDto;

    const queryBuidler = this.permissionRepo.createQueryBuilder('permissions');

    if (permissionIds && permissionIds.length > 0) {
      queryBuidler.where('permissions.id IN (:...permissionIds)', {
        permissionIds,
      });
    }

    if (page && limit) {
      const offset = limit * page - limit;
      queryBuidler.offset(offset).limit(limit);
    }

    const [permissionList, totalPermission] =
      await queryBuidler.getManyAndCount();

    return {
      page: page,
      totalPage: Math.ceil(totalPermission / limit),
      total: totalPermission,
      list: permissionList,
    };
  }

  findOne(id: number) {
    return this.permissionRepo.findOneBy({ id });
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto) {
    await this.permissionRepo.update(id, updatePermissionDto);
    return this.permissionRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.permissionRepo.delete(id);
  }
}
