import { Module } from '@nestjs/common';
import { ShoePostsController } from './shoe-posts.controller';
import { ShoePostsModule } from './shoe-posts.module';
import { ShoePostsService } from './shoe-posts.service';

@Module({
  imports: [ShoePostsModule],
  providers: [ShoePostsService],
  controllers: [ShoePostsController]
})
export class ShoePostHttpModule {}
