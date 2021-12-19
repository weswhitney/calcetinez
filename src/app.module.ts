import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ShoePostsModule } from './shoe-posts/shoe-posts.module';

@Module({
  imports: [PostsModule, ShoePostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
