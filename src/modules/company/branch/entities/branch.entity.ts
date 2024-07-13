import { BaseAbstractEntity } from 'src/common/entities/base.enity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CompanyEntity } from '../../entities/company.entity';

@Entity({ name: 'branches' })
export class BranchEntity extends BaseAbstractEntity {
  @Column()
  name: string;

  @Column()
  addresss: string;

  @Column({ name: 'company_id', nullable: true })
  companyId?: number;

  @ManyToOne(() => CompanyEntity, (company) => company.branches)
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;
}
