import { BaseAbstractEntity } from 'src/common/entities/base.enity';
import { Column, Entity, OneToMany } from 'typeorm';
import { BranchEntity } from '../branch/entities/branch.entity';

@Entity({ name: 'companies' })
export class CompanyEntity extends BaseAbstractEntity {
  @Column()
  name: string;

  @Column()
  code: string;

  @OneToMany(() => BranchEntity, (branches) => branches.company)
  branches: BranchEntity[];
}
