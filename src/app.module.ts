import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoePostsModule } from './shoe-posts/shoe-posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';
// import { ShoePost } from './shoe-posts/shoe-posts.entity';

@Module({
  imports: [
    ShoePostsModule,
    // TypeOrmModule.forRootAsync({
    // useFactory: async () =>
    //   Object.assign(await getConnectionOptions(), {
    //     autoLoadEntities: true,
    //     // entities: [ShoePost],
    //   }),
    // }),
    // TypeOrmModule.forRoot()
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'botaz',
      database: 'shoeswap',
      autoLoadEntities: true,
      synchronize: true,
    }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
