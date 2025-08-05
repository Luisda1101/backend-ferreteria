import { addProfile, createMapper, MappingProfile } from '@automapper/core';
import { classes } from '@automapper/classes';

import { createEntityMaps } from './generic.mapper';

import { Customer } from '../../Domain/Entities/Customer';
import CustomerResponseDto from '../DTOs/Customer/CustomerResponseDto';
import CustomerRequestDto from '../DTOs/Customer/CustomerRequestDto';
import CustomerUpdateDto from '../DTOs/Customer/CustomerUpdateDto';

export const customerProfile: MappingProfile = (mapper) => {
    createEntityMaps(
        mapper,
        Customer,
        CustomerRequestDto,
        CustomerResponseDto,
        CustomerUpdateDto
    );
};

export const customer_mapper = createMapper({
    strategyInitializer: classes(),
});