import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDTO, UpdateCompanyDTO } from './dto/company.dto';
import { CompanyEntity } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepo: Repository<CompanyEntity>,
  ) {}

  getOne(id: number) {
    return this.companyRepo.findOneBy({ id });
  }

  getList() {
    return this.companyRepo.find();
  }

  create(createCompanyDTO: CreateCompanyDTO) {
    return this.companyRepo.save(this.companyRepo.create(createCompanyDTO));
  }

  async update(id: number, updateCompanyDTO: UpdateCompanyDTO) {
    await this.companyRepo.update(id, updateCompanyDTO);
    return this.companyRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.companyRepo.delete(id);
  }
}
