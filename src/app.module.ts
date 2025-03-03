import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from 'src/databases/typeOrm/typeOrm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthManagementModule } from './modules/auth-management/auth-management.module';
import { CompanyModule } from './modules/company/company.module';
import { SocialNetworkModule } from './modules/social-network/social-network.module';
import { UserManagementModule } from './modules/user-management/user-management.module';

@Module({
  imports: [
    TypeOrmConfigModule,
    CompanyModule,
    UserManagementModule,
    SocialNetworkModule,
    AuthManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
