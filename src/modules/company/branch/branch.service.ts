import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { BranchEntity } from './entities/branch.entity';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(BranchEntity)
    private readonly branchRepo: Repository<BranchEntity>,
  ) {}

  create(createBranchDto: CreateBranchDto) {
    return this.branchRepo
      .createQueryBuilder('branches')
      .insert()
      .into(BranchEntity)
      .values(createBranchDto)
      .execute();
  }

  findAll() {
    return `This action returns all branch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} branch`;
  }

  update(id: number, updateBranchDto: UpdateBranchDto) {
    return `This action updates a #${id} branch`;
  }

  remove(id: number) {
    return `This action removes a #${id} branch`;
  }

  findByIds(ids: Array<number>) {
    return this.branchRepo
      .createQueryBuilder('branches')
      .where('branches.id IN (:...ids)', { ids })
      .getMany();
  }

  save(branch: BranchEntity) {
    return this.branchRepo.save(branch);
  }
}
