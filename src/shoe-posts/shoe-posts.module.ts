import { Module } from '@nestjs/common';
import { ShoePostsService } from './shoe-posts.service';
import { ShoePostsController } from './shoe-posts.controller';
import { ShoePost } from './shoe-post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ShoePost])],
  providers: [ShoePostsService],
  controllers: [ShoePostsController],
  exports: [ShoePostsService],
})
export class ShoePostsModule {}
