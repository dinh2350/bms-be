import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BranchService } from './branch/branch.service';
import { CreateCompanyDTO, UpdateCompanyDTO } from './dto/company.dto';
import { CompanyEntity } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepo: Repository<CompanyEntity>,
    private readonly branchService: BranchService,
  ) {}

  getOne(id: number) {
    return this.companyRepo.findOneBy({ id });
  }

  getList() {
    return this.companyRepo.find();
  }

  async create(createCompanyDTO: CreateCompanyDTO) {
    // create company
    const { branchids, ...companyData } = createCompanyDTO;
    const company = await this.companyRepo.save(
      this.companyRepo.create(companyData),
    );
    // check branchIds is exist
    if (branchids?.length === 0) return company;
    // pull data of branch from database by branchIds
    const branches = await this.branchService.findByIds(branchids);
    // true => save companyId to branchEntity
    const branchesAfterSave = await Promise.all(
      branches.map((branch) => {
        branch.companyId = company.id;
        return this.branchService.save(branch);
      }),
    );
    // format data
    company.branches = branchesAfterSave;
    return company;
  }

  async update(id: number, updateCompanyDTO: UpdateCompanyDTO) {
    await this.companyRepo.update(id, updateCompanyDTO);
    return this.companyRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.companyRepo.delete(id);
  }
}
