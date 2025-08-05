import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { AutoMap } from "@automapper/classes";
import { Bill } from "./Bill";

@Entity("customers")
export class Customer extends BaseEntity {

    @Column()
    @AutoMap()
    fullname!: string;

    @Column({ unique: true })
    @AutoMap()
    document_id!: string;

    @Column()
    @AutoMap()
    phone!: string;

    @Column()
    @AutoMap()
    address!: string;

    @OneToMany(() => Bill, bill => bill.customer)
    bills!: Bill[];
}