import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseAbstractWithOutIDEntity {
  @Column()
  @CreateDateColumn({
    type: 'timestamp',
    default: 'now()',
  })
  created_date: Date;

  @Column()
  @UpdateDateColumn({
    type: 'timestamp',
    default: 'now()',
  })
  last_modified_date: Date;

  @Column({
    nullable: true,
  })
  created_by?: number;

  @Column({
    nullable: true,
  })
  last_modified_by: number;
}

export abstract class BaseAbstractEntity extends BaseAbstractWithOutIDEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
}
