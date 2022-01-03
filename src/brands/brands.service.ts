import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private brandsRepository: Repository<Brand>,
  ) {}
  create(brand: Brand) {
    return this.brandsRepository.save(brand);
  }

  findAll() {
    return this.brandsRepository.find();
  }

  findOne(id: number) {
    return this.brandsRepository.findOne(id);
  }

  async update(id: number, brand: Brand) {
    await this.brandsRepository.update(id, brand);
    return await this.brandsRepository.findOne(id);
  }

  remove(id: number) {
    return this.brandsRepository.delete(id);
  }
}
