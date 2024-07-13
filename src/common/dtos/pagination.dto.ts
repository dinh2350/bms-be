import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PaginationDTO {
  @ApiProperty({
    required: false,
    default: 1,
  })
  @IsOptional()
  page?: number;

  @ApiProperty({
    required: false,
    default: 10,
  })
  @IsOptional()
  limit?: number;
}
