import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from 'src/databases/typeOrm/typeOrm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
