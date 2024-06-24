import { BaseAbstractEntity } from 'src/common/entities/base.enity';
import { Column, Entity } from 'typeorm';
import { GENDER_ENUM } from '../enums/gender.enum';

@Entity({ name: 'users' })
export class UserEntity extends BaseAbstractEntity {
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  dob: Date;

  @Column({
    type: 'enum',
    enum: GENDER_ENUM,
  })
  gender: GENDER_ENUM;
}
