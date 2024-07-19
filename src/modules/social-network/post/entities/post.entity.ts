import { BaseAbstractEntity } from 'src/common/entities/base.enity';
import { Column, Entity, OneToMany } from 'typeorm';
import { CommentEntity } from '../../comment/entities/comment.entity';

@Entity({ name: 'posts' })
export class PostEntity extends BaseAbstractEntity {
  @Column()
  title: string;

  @Column()
  content: string;

  @OneToMany(() => CommentEntity, (comments) => comments.post)
  comments: CommentEntity[];
}
