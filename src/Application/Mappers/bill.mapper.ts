import { addProfile, createMapper, MappingProfile } from '@automapper/core';
import { classes } from '@automapper/classes';

import { createEntityMaps } from './generic.mapper';

import { Bill } from 'src/Domain/Entities/Bill';
import BillRequestDto from '../DTOs/Bill/BillRequestDto';
import BillResponseDto from '../DTOs/Bill/BillResponseDto';
import BillUpdateDto from '../DTOs/Bill/BillUpdateDto';


export const billProfile: MappingProfile = (mapper) => {
    createEntityMaps(
        mapper,
        Bill,
        BillRequestDto,
        BillResponseDto,
        BillUpdateDto
    );
};

export const bill_mapper = createMapper({
    strategyInitializer: classes(),
});