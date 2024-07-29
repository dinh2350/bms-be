import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/common/security/hash.security';
import {
  JWT_EXPIRES_IN_ACCESS_TOKEN,
  JWT_EXPIRES_IN_REFRESH_TOKEN,
  JWT_SECRET,
} from 'src/environments';
import { UserService } from 'src/modules/user-management/user/user.service';

import { RefreshTokenDto } from './dto/refresh-token.dto';
import { SignInDto } from './dto/sign-in.dto';
import { IPayload } from './type/payload.type';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async signIn(signInDto: SignInDto) {
    const { username, password } = signInDto;
    const user = await this.userService.findOneByUserName(username);
    if (!user)
      throw new HttpException('Username incorrect', HttpStatus.BAD_REQUEST);
    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword)
      throw new HttpException('Password incorrect!', HttpStatus.BAD_REQUEST);
    // create token
    const payload: IPayload = {
      userId: user.id,
      userName: user.userName,
    };
    return this.generateToken(payload);
  }

  async refreshToken(refreshTokenDto: RefreshTokenDto) {
    const { refreshToken } = refreshTokenDto;
    const payload: IPayload = await this.jwtService.verifyAsync(refreshToken, {
      secret: JWT_SECRET,
    });

    if (!payload.userId)
      throw new HttpException('refresh token invalid', HttpStatus.UNAUTHORIZED);

    return this.generateToken({
      userId: payload.userId,
      userName: payload.userName,
    });
  }

  async generateToken(payload: IPayload) {
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: JWT_EXPIRES_IN_ACCESS_TOKEN,
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: JWT_EXPIRES_IN_REFRESH_TOKEN,
    });
    return {
      accessToken,
      refreshToken,
    };
  }
}
