import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShoePost } from './entities/shoe-post.entity';

@Injectable()
export class ShoePostsService {
  constructor(
    @InjectRepository(ShoePost)
    private shoePostRepository: Repository<ShoePost>,
  ) {}

  create(shoePost: ShoePost): Promise<ShoePost> {
    return this.shoePostRepository.save(shoePost);
  }

  async findAll(): Promise<ShoePost[]> {
    const shoePost = await this.shoePostRepository.query(`
    SELECT sp.*, sb.brand_name
    FROM shoe_post sp
        left join brand sb on sp.brand_id = sb.id`);

    return shoePost;
  }

  async findOne(id: number): Promise<ShoePost> {
    const shoePost = await this.shoePostRepository.query(
      `
    SELECT sp.*, sb.brand_name
    FROM shoe_post sp
        left join brand sb on sp.brand_id = sb.id
    WHERE sp.id = ?`,
      [id],
    );

    return shoePost;
  }

  async update(id: number, shoePost: ShoePost): Promise<ShoePost> {
    await this.shoePostRepository.update(id, shoePost);
    return await this.shoePostRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.shoePostRepository.delete(id);
  }
}
