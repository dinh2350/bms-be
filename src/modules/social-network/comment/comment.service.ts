import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostService } from '../post/post.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepo: Repository<CommentEntity>,
    @Inject(forwardRef(() => PostService))
    private postService: PostService,
  ) {}
  async create(createCommentDto: CreateCommentDto) {
    // check exist post
    await this.postService.findOne(createCommentDto.postId);
    return this.commentRepo.save(this.commentRepo.create(createCommentDto));
  }

  findAll() {
    return this.commentRepo.find();
  }

  async findOne(id: number) {
    const comment = await this.commentRepo.findOneBy({ id });
    if (!comment)
      throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
    return comment;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    await this.postService.findOne(updateCommentDto.postId);
    await this.commentRepo.update(id, updateCommentDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.commentRepo.delete(id);
  }
}
