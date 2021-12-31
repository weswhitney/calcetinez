import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { response } from 'express';
import { ShoePost } from './shoe-post.entity';
import { ShoePostsService } from './shoe-posts.service';

@Controller('shoe-posts')
export class ShoePostsController {
  constructor(private readonly shoePostsService: ShoePostsService) {}

  @Get()
  async findAll(@Res() response): Promise<ShoePost[]> {
    const shoePosts = await this.shoePostsService.findAll();
    return response.status(HttpStatus.OK).json({
      shoePosts,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const shoePost = await this.shoePostsService.findOne(id);
    return response.status(HttpStatus.OK).json({
      shoePost,
    });
  }

  @Post()
  async createShoePost(@Res() response, @Body() shoePost: ShoePost) {
    const newShoePost = await this.shoePostsService.createShoePost(shoePost);
    return response.status(HttpStatus.CREATED).json({
      newShoePost,
    });
  }

  @Delete('/:id')
  async deleteShoePost(@Res() response, @Param('id') id) {
    const shoePostToDelete = await this.shoePostsService.remove(id);
    return response.status(HttpStatus.OK).json({});
  }

  @Put('/:id')
  async updateShoePost(
    @Res() response,
    @Param('id') id,
    @Body() shoePost: ShoePost,
  ) {
    const shoePostToUpdate = await this.shoePostsService.update(id, shoePost);
    return response.status(HttpStatus.OK).json({
      shoePostToUpdate,
    });
  }
}
