import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export default class CustomerUpdateDto {

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

}