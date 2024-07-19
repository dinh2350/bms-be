import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from '../post/post.module';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentEntity } from './entities/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentEntity]),
    forwardRef(() => PostModule),
  ],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService],
})
export class CommentModule {}
