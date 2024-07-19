import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pagination } from 'src/common/utils/pagination';
import { Repository } from 'typeorm';
import { CommentService } from '../comment/comment.service';
import { CreatePostDto } from './dto/create-post.dto';
import { QueryPostDto } from './dto/query-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepo: Repository<PostEntity>,
    @Inject(forwardRef(() => CommentService))
    private commentService: CommentService,
  ) {}
  create(createPostDto: CreatePostDto) {
    return this.postRepo.save(this.postRepo.create(createPostDto));
  }

  async find(queryPostDto: QueryPostDto) {
    const { queryFilter, page, limit } = queryPostDto;
    const queryBuidler = this.postRepo.createQueryBuilder('posts');

    if (queryFilter) {
      queryBuidler.where('posts.title ILIKE :query', {
        query: `%${queryFilter}%`,
      });
    }
    const posts = await pagination(page, limit, queryBuidler);

    return posts;
  }

  async findOne(id: number) {
    const post = await this.postRepo.findOneBy({ id });
    if (!post) throw new HttpException('Post not Found!', HttpStatus.NOT_FOUND);
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id);
    await this.postRepo.update(id, updatePostDto);
    return post;
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.postRepo.delete(id);
  }
}
