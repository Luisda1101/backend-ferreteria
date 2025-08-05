import { Inject, Injectable } from "@nestjs/common";
import { GenericService } from "./GenericService";
import { Customer } from "src/Domain/Entities/Customer";
import { ICustomerRepository } from "src/Domain/Interfaces/ICustomerRepository";
import { customer_mapper } from "src/Application/Mappers/customer.mapper";
import CustomerRequestDto from "src/Application/DTOs/Customer/CustomerRequestDto";
import CustomerUpdateDto from "src/Application/DTOs/Customer/CustomerUpdateDto";
import CustomerResponseDto from "src/Application/DTOs/Customer/CustomerResponseDto";

@Injectable()
export class CustomerService extends GenericService<Customer, CustomerRequestDto, CustomerUpdateDto, CustomerResponseDto> {
  constructor(
    @Inject("CUSTOMER_REPOSITORY")
    private readonly customerRepository: ICustomerRepository
  ) {
    super(
      customerRepository,
      customer_mapper,
      Customer, 
      CustomerRequestDto, 
      CustomerUpdateDto, 
      CustomerResponseDto
    );
  }
}