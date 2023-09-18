import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SignInUserDTO } from '../dto/signin_user.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async signIn({ id, password }: SignInUserDTO) {
    const getUser = await this.findOneBy({
      userId: id,
      password,
    });

    if (!getUser) {
      throw new NotFoundException('일치하는 유저가 없습니다.');
    }

    return getUser;
  }
}
