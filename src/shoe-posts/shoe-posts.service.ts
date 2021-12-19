import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { ShoePostModel } from './shoe-posts.interface';

@Injectable()
export class ShoePostsService {
  private shoePosts: Array<ShoePostModel> = [];

  public findAll(): Array<ShoePostModel> {
    return this.shoePosts;
  }

  public findOne(id: number): ShoePostModel {
    const shoePost: ShoePostModel = this.shoePosts.find(shoePost => shoePost.id === id);
  
    if (!shoePost) {
      throw new NotFoundException('shoe post not found.');
    }
  
    return shoePost;
  }

  public create(shoePost: ShoePostModel): ShoePostModel {
    // if the title is already in use by another post
    // const brandExists: boolean = this.shoePosts.some(
    //   (item) => item.brand === shoePost.brand,
    // );
    // if (brandExists) {
    //   throw new UnprocessableEntityException('Post title already exists.');
    // }
  
    // find the next id for a new blog post
    const maxId: number = Math.max(...this.shoePosts.map((shoePost) => shoePost.id), 0);
    const id: number = maxId + 1;
  
    const shoeSwapPost: ShoePostModel = {
      ...shoePost,
      id,
    };
  
    this.shoePosts.push(shoeSwapPost);
  
    return shoeSwapPost;
  }

  public delete(id: number): void {
    const index: number = this.shoePosts.findIndex(shoePost => shoePost.id === id);
  
    // -1 is returned when no findIndex() match is found
    if (index === -1) {
      throw new NotFoundException('shoe post not found.');      
    }
  
    this.shoePosts.splice(index, 1);
  }

  public update(id: number, shoePost: ShoePostModel): ShoePostModel {
    // this.logger.log(`Updating post with id: ${id}`);
  
    const index: number = this.shoePosts.findIndex((post) => post.id === id);
  
    // -1 is returned when no findIndex() match is found
    if (index === -1) {
      throw new NotFoundException('shoe post not found.');
    }
  
    // if the title is already in use by another post
    // const brandExists: boolean = this.shoePosts.some(
    //   (item) => item.brand === shoePost.brand && item.id !== id,
    // );
    // if (brandExists) {
    //   throw new UnprocessableEntityException('shoe post brand already exists.');
    // }
  
    const blogPost: ShoePostModel = {
      ...shoePost,
      id,
    };
  
    this.shoePosts[index] = blogPost;
  
    return blogPost;
  }
}
