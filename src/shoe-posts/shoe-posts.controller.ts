import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ShoePost } from './entities/shoe-post.entity';
import { ShoePostsService } from './shoe-posts.service';

@Controller('shoe-posts')
export class ShoePostsController {
  constructor(private readonly shoePostsService: ShoePostsService) {}

  @Post()
  create(@Body() shoePost: ShoePost) {
    return this.shoePostsService.create(shoePost);
  }

  @Get()
  findAll() {
    return this.shoePostsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoePostsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() shoePost: ShoePost) {
    return this.shoePostsService.update(+id, shoePost);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoePostsService.remove(+id);
  }
}
