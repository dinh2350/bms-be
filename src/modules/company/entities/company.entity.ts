import { BaseAbstractEntity } from 'src/common/entities/base.enity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'companies' })
export class CompanyEntity extends BaseAbstractEntity {
  @Column()
  name: string;

  @Column()
  code: string;
}
