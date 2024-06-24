import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { CreateCompanyDTO, UpdateCompanyDTO } from './dto/company.dto';

@ApiTags('Company API')
@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.companyService.getOne(id);
  }

  @Get()
  getList() {
    return this.companyService.getList();
  }

  @Post()
  create(@Body() createCompanyDTO: CreateCompanyDTO) {
    return this.companyService.create(createCompanyDTO);
  }

  @Put(':id')
  update(@Body() updateCompanyDTO: UpdateCompanyDTO, @Param('id') id: number) {
    return this.companyService.update(id, updateCompanyDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.companyService.remove(id);
  }
}
