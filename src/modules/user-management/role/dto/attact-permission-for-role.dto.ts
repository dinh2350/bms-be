import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class AttachPermissionForRoleDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  roleId: number;

  @ApiProperty({ example: [1, 2, 3] })
  @IsNotEmpty()
  @IsArray()
  permissionIds: Array<number>;
}
