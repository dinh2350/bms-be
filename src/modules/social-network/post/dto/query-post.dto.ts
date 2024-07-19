import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';
import { SORT } from 'src/common/enums/sort.enum';
import { POST_COLUMN_ENUM } from '../enums/post.enums';

export class QueryPostDto extends PaginationDTO {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({ example: POST_COLUMN_ENUM.ID })
  @IsEnum(POST_COLUMN_ENUM)
  @IsOptional()
  orderByColum?: POST_COLUMN_ENUM;

  @ApiPropertyOptional({ example: SORT.ASC })
  @IsEnum(SORT)
  @IsOptional()
  sortBy?: SORT;
}
