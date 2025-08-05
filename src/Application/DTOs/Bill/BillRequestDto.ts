import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export default class BillRequestDto {

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

}