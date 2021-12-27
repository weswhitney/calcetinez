import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ShoePost } from './shoe-post.entity';
import { ShoePostModel } from './shoe-posts.interface';
import { ShoePostsService } from './shoe-posts.service';

@Controller('shoe-posts')
export class ShoePostsController {
  constructor(private readonly shoePostsService: ShoePostsService) {}

  @Get()
    findAll(): Promise<ShoePost[]> {
    return this.shoePostsService.findAll();
  }

  @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number): Promise<ShoePostModel> {
    return this.shoePostsService.findOne(id);
  }

  // @Post()
  //   public create(@Body() shoePost: ShoePostModel): ShoePostModel {
  //   return this.shoePostsService.create(shoePost);
  // }

  @Delete(':id')
    public delete(@Param('id', ParseIntPipe) id: number): void {  
    this.shoePostsService.remove(id);
  }

  // @Put(':id')
  //   public update(@Param('id', ParseIntPipe) id: number, @Body() shoePost: ShoePostModel): ShoePostModel {
  //   return this.shoePostsService.update(id, shoePost);
  // }
}
