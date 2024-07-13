import {
  BaseAbstractEntity,
  BaseAbstractWithOutIDEntity,
} from 'src/common/entities/base.enity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { PermissionEntity } from '../../permission/entities/permission.entity';

@Entity({ name: 'roles' })
export class RoleEntity extends BaseAbstractEntity {
  @Column()
  name: string;

  @OneToMany(
    () => RolePermissionEntity,
    (rolePermission) => rolePermission.role,
  )
  rolesPermissions: RolePermissionEntity[];
}

@Entity({ name: 'roles_permissions' })
export class RolePermissionEntity extends BaseAbstractWithOutIDEntity {
  @PrimaryColumn({ name: 'role_id' })
  roleId: number;

  @PrimaryColumn({ name: 'permission_id' })
  permissionId: number;

  @ManyToOne(() => RoleEntity, (role) => role.rolesPermissions)
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  @ManyToOne(
    () => PermissionEntity,
    (permission) => permission.rolesPermissions,
  )
  @JoinColumn({ name: 'permission_id' })
  permission: PermissionEntity;
}
