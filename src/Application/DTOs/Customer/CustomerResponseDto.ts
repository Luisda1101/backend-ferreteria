import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import BillResponseDto from '../Bill/BillResponseDto';

export default class CustomerResponseDto {

    @AutoMap()
    @ApiProperty()
    fullname!: string;

    @AutoMap()
    @ApiProperty()
    document_id!: string;

    @AutoMap()
    @ApiProperty()
    phone!: string;

    @AutoMap()
    @ApiProperty()
    address!: string;

    @AutoMap(() => [BillResponseDto])
    @ApiProperty({ type: () => [BillResponseDto] })
    bills?: BillResponseDto[];

}