import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/modules/user-management/user/dto/create-user.dto';
import { UserService } from 'src/modules/user-management/user/user.service';

@ApiTags('Auth API')
@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
