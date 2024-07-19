import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'Du lich' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'dui lam' })
  @IsString()
  content: string;
}
