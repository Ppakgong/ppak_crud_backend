import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { SignInUserDTO } from './dto/signin_user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  signIn(@Param() params: SignInUserDTO) {
    return this.userService.signIn(params);
  }
}
