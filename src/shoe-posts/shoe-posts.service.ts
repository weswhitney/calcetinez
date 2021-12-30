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

  findAll(): Promise<ShoePost[]> {
    return this.shoePostRepository.find();
  }

  findOne(id: number): Promise<ShoePost>  {
    return this.shoePostRepository.findOne(id);
  }

  createShoePost(shoePost: ShoePost): Promise<ShoePost> {
    return this.shoePostRepository.save(shoePost);
  }

  async remove(id: number): Promise<void> {
    await this.shoePostRepository.delete(id);
  }

  async update(id: number, shoePost: ShoePost): Promise<ShoePost> {
    await this.shoePostRepository.update(id, shoePost)
    return await this.shoePostRepository.findOne(id)
  }
}
