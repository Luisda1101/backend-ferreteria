import "reflect-metadata";
import { DataSource } from "typeorm";

import { Customer } from '../../Domain/Entities/Customer';
import { Bill } from "src/Domain/Entities/Bill";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username:"postgres",
    password: "1101",
    database: "db_ferreteria",
    synchronize: true,
    logging: false,
    entities: [Customer, Bill],
    migrations: [],
});