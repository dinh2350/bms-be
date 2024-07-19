import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 'good' })
  @IsString()
  content: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  postId: number;
}
