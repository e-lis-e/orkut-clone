import {
  Controller,
  Get,
  Post,
  //Put,
  //Delete,
  Param,
  Body,
  //HttpCode,
  //HttpStatus,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //GET /user
  @Get()
  findAll() {
    return [];
  }
  //GET /user/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  //POST /user
  @Post()
  create(@Body() data: UserDto) {
    return this.userService.create(data);
  }
  //PUT /user/:id
  //   @Put(':id')
  //   update(@Param('id') id: string, @Body() data: UserDto) {
  //     return {
  //       //   id,
  //       //   updateUserDto,
  //     };
  //   }
  //DELETE /user/:id
  //   @Delete(':id')
  //   @HttpCode(HttpStatus.NO_CONTENT)
  //   remove(@Param('id') id: string) {}
}
