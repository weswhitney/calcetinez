import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ShoePost } from './entities/shoe-post.entity';
import { ShoePostsService } from './shoe-posts.service';

@Controller('shoe-posts')
export class ShoePostsController {
  constructor(private readonly shoePostsService: ShoePostsService) {}
  
  @Post()
  async createShoePost(@Res() response, @Body() shoePost: ShoePost) {
    const newShoePost = await this.shoePostsService.createShoePost(shoePost);
    return response.status(HttpStatus.CREATED).json({
      newShoePost,
    });
  }
  
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
  
  @Delete('/:id')
  async deleteShoePost(@Res() response, @Param('id') id) {
    await this.shoePostsService.remove(id);
    return response.status(HttpStatus.OK).json({});
  }

}
