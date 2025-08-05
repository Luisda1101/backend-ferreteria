import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { AutoMap } from "@automapper/classes";
import { Customer } from "./Customer";

@Entity("bills")
export class Bill extends BaseEntity {

    @AutoMap()
    @Column("decimal")
    amount!: number;

    @AutoMap()
    @Column()
    motive!: string;

    @AutoMap()
    @Column()
    state!: string;

    @AutoMap()
    @Column({unique: true})
    code!: string;

    @ManyToOne(() => Customer, customer => customer.bills, { nullable: false })
    @JoinColumn({ name: "customer_id" })
    @AutoMap(() => Customer)
    customer: Customer;

}