import { Module } from '@nestjs/common';
import { DatabaseModule } from './Infrastructure/Database/database.module';
import { CustomerController } from './Presentation/Controllers/CustomerController';
import { InfrastructureProviders } from './Infrastructure/providers';
import { CustomerService } from './Application/Services/CustomerService';
import { BillController } from './Presentation/Controllers/BillController';
import { BillService } from './Application/Services/BillService';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CustomerController,
    BillController
  ],
  providers: [
    ...InfrastructureProviders,
    CustomerService,
    BillService
  ],
})

export class AppModule {

}
