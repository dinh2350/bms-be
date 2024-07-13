import { BaseAbstractEntity } from 'src/common/entities/base.enity';
import { Column, Entity, OneToMany } from 'typeorm';
import { RolePermissionEntity } from '../../role/entities/role.entity';

@Entity({ name: 'permissions' })
export class PermissionEntity extends BaseAbstractEntity {
  @Column()
  name: string;

  @OneToMany(
    () => RolePermissionEntity,
    (rolePermission) => rolePermission.permission,
  )
  rolesPermissions: RolePermissionEntity[];
}
