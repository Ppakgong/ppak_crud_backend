import { Injectable } from '@nestjs/common';
import { SignInUserDTO } from './dto/signin_user.dto';

@Injectable()
export class UserService {
  async signIn({ id, password }: SignInUserDTO) {
    return {
      ok: true,
      error: null,
      user: {
        id,
        password,
      },
    };
  }
}
