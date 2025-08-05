import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import CustomerResponseDto from '../Customer/CustomerResponseDto';

export default class BillResponseDto {

    @AutoMap()
    @ApiProperty()
    amount!: number;

    @AutoMap()
    @ApiProperty()
    motive!: string;

    @AutoMap()
    @ApiProperty()
    state!: string;

    @AutoMap()
    @ApiProperty()
    code!: string;

    @AutoMap(() => CustomerResponseDto)
    @ApiProperty({ type: () => CustomerResponseDto })
    customer!: CustomerResponseDto;

}