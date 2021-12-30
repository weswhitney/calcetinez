import { Injectable, Logger, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShoePost } from './shoe-post.entity';

@Injectable()
export class ShoePostsService {
  constructor(
    @InjectRepository(ShoePost)
    private shoePostRepository: Repository<ShoePost>,
  ) {}

  async findAll(): Promise<ShoePost[]> {
    return this.shoePostRepository.find();
  }

  // public findOne(id: number): ShoePostModel {
  //   const shoePost: ShoePostModel = this.shoePosts.find(shoePost => shoePost.id === id);
  
  //   if (!shoePost) {
  //     throw new NotFoundException('shoe post not found.');
  //   }
  
  //   return shoePost;
  // }

  findOne(id: number): Promise<ShoePost>  {
    return this.shoePostRepository.findOne(id);
  }

  createShoePost(shoePost: ShoePost): Promise<ShoePost> {
    return this.shoePostRepository.save(shoePost);
  }

  // public create(shoePost: ShoePostModel): ShoePostModel {
  //   const maxId: number = Math.max(...this.shoePosts.map((shoePost) => shoePost.id), 0);
  //   const id: number = maxId + 1;
  
  //   const shoeSwapPost: ShoePostModel = {
  //     ...shoePost,
  //     id,
  //   };
  
  //   this.shoePosts.push(shoeSwapPost);
  
  //   return shoeSwapPost;
  // }

  // public delete(id: number): void {
  //   const index: number = this.shoePosts.findIndex(shoePost => shoePost.id === id);
  
  //   // -1 is returned when no findIndex() match is found
  //   if (index === -1) {
  //     throw new NotFoundException('shoe post not found.');      
  //   }
  
  //   this.shoePosts.splice(index, 1);
  // }
  async remove(id: number): Promise<void> {
    await this.shoePostRepository.delete(id);
  }

  // public update(id: number, shoePost: ShoePostModel): ShoePostModel {
  //   // this.logger.log(`Updating post with id: ${id}`);
  
  //   const index: number = this.shoePosts.findIndex((post) => post.id === id);
  
  //   // -1 is returned when no findIndex() match is found
  //   if (index === -1) {
  //     throw new NotFoundException('shoe post not found.');
  //   }
  
  //   // if the title is already in use by another post
  //   // const brandExists: boolean = this.shoePosts.some(
  //   //   (item) => item.brand === shoePost.brand && item.id !== id,
  //   // );
  //   // if (brandExists) {
  //   //   throw new UnprocessableEntityException('shoe post brand already exists.');
  //   // }
  
  //   const blogPost: ShoePostModel = {
  //     ...shoePost,
  //     id,
  //   };
  
  //   this.shoePosts[index] = blogPost;
  
  //   return blogPost;
  // }
}
