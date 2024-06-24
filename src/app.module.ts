import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from 'src/databases/typeOrm/typeOrm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './modules/company/company.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [TypeOrmConfigModule, CompanyModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
