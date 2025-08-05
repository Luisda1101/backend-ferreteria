import { CUSTOMER_REPOSITORY, BILL_REPOSITORY } from "src/Application/tokens";
import { CustomerRepository } from "./Persistence/CustomerRepository";
import { BillRepository } from "./Persistence/BillRepository";

export const InfrastructureProviders = [
    {
        provide: CUSTOMER_REPOSITORY,
        useClass: CustomerRepository,
    },
    {
        provide: BILL_REPOSITORY,
        useClass: BillRepository,
    }
]