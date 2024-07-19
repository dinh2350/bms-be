import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentModule } from '../comment/comment.module';
import { PostEntity } from './entities/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    forwardRef(() => CommentModule),
  ],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
