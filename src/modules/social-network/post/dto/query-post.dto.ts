import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';

export class QueryPostDto extends PaginationDTO {
  @ApiPropertyOptional()
  @IsOptional()
  queryFilter?: string;
}
