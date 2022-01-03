import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { Brand } from './entities/brand.entity';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Res () response, @Body() brand: Brand) {
    const newBrand = this.brandsService.create(brand);
    return response.status(HttpStatus.CREATED).json({
      newBrand,
    })
  }

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() brand: Brand) {
    return this.brandsService.update(+id, brand);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandsService.remove(+id);
  }
}
