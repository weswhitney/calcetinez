import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoePostsModule } from './shoe-posts/shoe-posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoePost } from './shoe-posts/entities/shoe-post.entity';
import { ConfigModule } from '@nestjs/config';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [
    ShoePostsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.SHOESWAP_DB_HOSTNAME,
      port: parseInt(process.env.SHOESWAP_DB_PORT),
      username: process.env.SHOESWAP_DB_USERNAME,
      password: process.env.SHOESWAP_DB_PASSWORD,
      database: process.env.SHOESWAP_DB_NAME,
      entities: [ShoePost],
      autoLoadEntities: true,
      synchronize: true,
    }),
    BrandsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
