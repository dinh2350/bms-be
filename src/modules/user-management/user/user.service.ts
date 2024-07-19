import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { handleHashPassword } from 'src/common/security/hash.security';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.findOneByUserName(createUserDto.userName);
    if (user)
      throw new HttpException(
        'User name must be unique!',
        HttpStatus.BAD_REQUEST,
      );
    const password = await handleHashPassword(createUserDto.password);
    createUserDto.password = password;
    return this.userRepo.save(this.userRepo.create(createUserDto));
  }

  async findAll(queryUserDto: QueryUserDto) {
    const queryBuidler = this.userRepo.createQueryBuilder('users');

    if (queryUserDto.page && queryUserDto.limit) {
      const limit = queryUserDto.limit;
      const page = queryUserDto.page;
      const offset = limit * page - limit;

      queryBuidler.offset(offset).limit(limit);
    }

    const [userList, totalUser] = await queryBuidler.getManyAndCount();

    return {
      page: queryUserDto.page,
      totalPage: Math.ceil(totalUser / queryUserDto.limit),
      total: totalUser,
      list: userList,
    };
  }

  findOneByUserName(userName: string) {
    return this.userRepo.findOneBy({ userName });
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepo.update(id, updateUserDto);
    return this.userRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
