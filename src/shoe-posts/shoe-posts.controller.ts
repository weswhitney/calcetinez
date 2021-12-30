import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { ShoePost } from './shoe-post.entity';
import { ShoePostModel } from './shoe-posts.interface';
import { ShoePostsService } from './shoe-posts.service';

@Controller('shoe-posts')
export class ShoePostsController {
  constructor(private readonly shoePostsService: ShoePostsService) {}

  @Get()
    async findAll(@Res() response): Promise<ShoePost[]> {
      const shoePosts = await this.shoePostsService.findAll()
      return response.status(HttpStatus.OK).json({
        shoePosts
      })
    }
  // @Get(':id')
  //   public findOne(@Param('id', ParseIntPipe) id: number): Promise<ShoePostModel> {
  //   return this.shoePostsService.findOne(id);
  // }

  @Post()
    async createShoePost(@Res() response, @Body() shoePost: ShoePost) {
        const newShoePost = await this.shoePostsService.createShoePost(shoePost);
        return response.status(HttpStatus.CREATED).json({
            newShoePost
        })
    }

  // @Post()
  //   public create(@Body() shoePost: ShoePostModel): ShoePostModel {
  //   return this.shoePostsService.create(shoePost);
  // }

  // @Delete(':id')
  //   public delete(@Param('id', ParseIntPipe) id: number): void {  
  //   this.shoePostsService.remove(id);
  // }

  // @Put(':id')
  //   public update(@Param('id', ParseIntPipe) id: number, @Body() shoePost: ShoePostModel): ShoePostModel {
  //   return this.shoePostsService.update(id, shoePost);
  // }
}
