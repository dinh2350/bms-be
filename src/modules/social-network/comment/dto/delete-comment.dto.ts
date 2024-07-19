import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DeleteCommentDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  postId: number;
}
