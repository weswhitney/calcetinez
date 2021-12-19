import { Test, TestingModule } from '@nestjs/testing';
import { ShoePostsService } from './shoe-posts.service';

describe('ShoePostsService', () => {
  let service: ShoePostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoePostsService],
    }).compile();

    service = module.get<ShoePostsService>(ShoePostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
