import { ICustomerRepository } from "../../Domain/Interfaces/ICustomerRepository";
import { Customer } from "../../Domain/Entities/Customer";
import { GenericRepository } from "./GenericRepository";
import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class CustomerRepository extends GenericRepository<Customer> implements ICustomerRepository {
    constructor(dataSource: DataSource) {
        super(Customer, dataSource, 'id');
    }

    // Aquí puedes agregar métodos específicos para CustomerRepository si es necesario
    // Por ejemplo, buscar clientes por nombre, email, etc.
}