import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcryptjs';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() createUserDto: any) {
    const hashedPassword = bcrypt.hashSync(createUserDto.password, 8);
    return this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }
}
