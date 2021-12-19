import { Test, TestingModule } from '@nestjs/testing';
import { ShoePostsController } from './shoe-posts.controller';

describe('ShoePostsController', () => {
  let controller: ShoePostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoePostsController],
    }).compile();

    controller = module.get<ShoePostsController>(ShoePostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
