import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePermissionDto {
  @ApiProperty({ example: 'create user' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
