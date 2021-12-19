import { Module } from '@nestjs/common';
import { ShoePostsService } from './shoe-posts.service';
import { ShoePostsController } from './shoe-posts.controller';

@Module({
  providers: [ShoePostsService],
  controllers: [ShoePostsController],
  exports: [ShoePostsService],
})
export class ShoePostsModule {}
