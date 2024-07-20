import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxLCJ1c2VyTmFtZSI6ImhhbzAxIiwiaWF0IjoxNzIxNDgxODYwLCJleHAiOjE3MjE1NjgyNjB9.FrGLmXYuXs8S321wOVDF6rx9tAjV8MpL0FjjCXuTbQQ',
  })
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}
