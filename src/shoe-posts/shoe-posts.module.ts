import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoePostsController } from './shoe-posts.controller';

import { ShoePost } from './shoe-post.entity';
import { ShoePostsService } from './shoe-posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShoePost])],
  providers: [ShoePostsService],
  controllers: [ShoePostsController],
})
export class ShoePostsModule {}
