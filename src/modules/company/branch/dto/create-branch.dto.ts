import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBranchDto {
  @ApiProperty({ example: 'branch example 1' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'addresss exmaple 1' })
  @IsNotEmpty()
  @IsString()
  addresss: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  companyId?: number;
}
