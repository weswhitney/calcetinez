import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ShoePostModel } from './shoe-posts.interface';
import { ShoePostsService } from './shoe-posts.service';

@Controller('shoe-posts')
export class ShoePostsController {
  constructor(private readonly shoePostsService: ShoePostsService) {}

  @Get()
    public findAll(): Array<ShoePostModel> {
    return this.shoePostsService.findAll();
  }

  @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number): ShoePostModel {
    return this.shoePostsService.findOne(id);
  }

  @Post()
    public create(@Body() shoePost: ShoePostModel): ShoePostModel {
    return this.shoePostsService.create(shoePost);
  }

  @Delete(':id')
    public delete(@Param('id', ParseIntPipe) id: number): void {  
    this.shoePostsService.delete(id);
  }

  @Put(':id')
    public update(@Param('id', ParseIntPipe) id: number, @Body() shoePost: ShoePostModel): ShoePostModel {
    return this.shoePostsService.update(id, shoePost);
  }
}
