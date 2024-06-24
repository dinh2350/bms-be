import { BaseAbstractEntity } from 'src/common/entities/base.enity';
import { Column, Entity } from 'typeorm';
@Entity({ name: 'clients' })
export class ClientEntity extends BaseAbstractEntity {
  @Column()
  name: string;
}
