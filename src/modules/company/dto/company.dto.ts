import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyDTO {
  @ApiProperty({ example: 'company exmaple' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'code company exmaple' })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ example: [1, 2] })
  @IsArray({})
  branchids: number[];
}

export class UpdateCompanyDTO extends PartialType(CreateCompanyDTO) {}
