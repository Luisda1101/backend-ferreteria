import { Customer } from '../Entities/Customer';
import { IGenericRepository } from './IGenericRepository';
import { Injectable } from '@nestjs/common';

export interface ICustomerRepository extends IGenericRepository<Customer> {

}