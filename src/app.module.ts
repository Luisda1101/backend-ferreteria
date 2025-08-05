import { Module } from '@nestjs/common';
import { DatabaseModule } from './Infrastructure/Database/database.module';
import { CustomerController } from './Presentation/Controllers/CustomerController';
import { InfrastructureProviders } from './Infrastructure/providers';
import { CustomerService } from './Application/Services/CustomerService';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CustomerController,
  ],
  providers: [
    ...InfrastructureProviders,
    CustomerService
  ],
})

export class AppModule {

}
