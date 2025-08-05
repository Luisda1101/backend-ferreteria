import { IBillRepository } from "../../Domain/Interfaces/IBillRepository";
import { Bill } from "../../Domain/Entities/Bill";
import { GenericRepository } from "./GenericRepository";
import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class BillRepository extends GenericRepository<Bill> implements IBillRepository {
    constructor(dataSource: DataSource) {
        super(Bill, dataSource, 'id');
    }

    // Aquí puedes agregar métodos específicos para CustomerRepository si es necesario
    // Por ejemplo, buscar clientes por nombre, email, etc.
}