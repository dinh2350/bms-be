import { BaseAbstractEntity } from 'src/common/entities/base.enity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { PostEntity } from '../../post/entities/post.entity';

@Entity({ name: 'comments' })
export class CommentEntity extends BaseAbstractEntity {
  @Column()
  content: string;

  @Column({ name: 'post_id', nullable: true })
  postId?: number;

  @ManyToOne(() => PostEntity, (post) => post.comments)
  @JoinColumn({ name: 'post_id' })
  post: PostEntity;
}
