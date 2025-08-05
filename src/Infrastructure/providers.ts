import { CUSTOMER_REPOSITORY } from "src/Application/tokens";
import { CustomerRepository } from "./Persistence/CustomerRepository";

export const InfrastructureProviders = [
    {
        provide: CUSTOMER_REPOSITORY,
        useClass: CustomerRepository,
    },
]