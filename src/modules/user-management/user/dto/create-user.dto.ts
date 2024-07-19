import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { GENDER_ENUM } from '../enums/gender.enum';

export class CreateUserDto {
  @ApiProperty({ example: 'Hào' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Nguyễn' })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'user name' })
  @IsNotEmpty()
  @IsString()
  userName: string;

  @ApiProperty({ example: 'password' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  dob?: Date;

  @ApiProperty({ enum: GENDER_ENUM })
  @IsEnum(GENDER_ENUM)
  gender: GENDER_ENUM;
}
