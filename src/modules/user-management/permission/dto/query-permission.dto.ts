import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsOptional } from 'class-validator';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';
import { TransformToArrayOfNumbers } from 'src/common/transformers/array-of-number.transform';

export class QueryPermissionDto extends PaginationDTO {
  @ApiPropertyOptional({ isArray: true, type: 'number', example: [1, 2, 3] })
  @IsOptional()
  @IsArray()
  @Transform(TransformToArrayOfNumbers)
  permissionIds?: Array<number>;
}

// ?permissionIds=2&permissionIds=1
// ?permissionIds=2,1
