import { addProfile } from '@automapper/core';
import { customerProfile, customer_mapper } from './customer.mapper';

export function initializeMappers() {
    addProfile(customer_mapper, customerProfile);
}