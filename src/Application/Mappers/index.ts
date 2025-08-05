import { addProfile } from '@automapper/core';
import { customerProfile, customer_mapper } from './customer.mapper';
import { bill_mapper, billProfile } from './bill.mapper';

export function initializeMappers() {
    addProfile(customer_mapper, customerProfile);
    addProfile(bill_mapper, billProfile);
}