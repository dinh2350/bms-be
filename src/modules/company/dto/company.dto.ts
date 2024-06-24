import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyDTO {
  @ApiProperty({ example: 'company exmaple' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'code company exmaple' })
  @IsNotEmpty()
  @IsString()
  code: string;
}

export class UpdateCompanyDTO extends PartialType(CreateCompanyDTO) {}
