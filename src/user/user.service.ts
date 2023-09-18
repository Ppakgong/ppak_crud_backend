import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { SignInUserDTO } from './dto/signin_user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signIn({ id, password }: SignInUserDTO) {
    return this.userRepository.signIn({ id, password });
  }
}
