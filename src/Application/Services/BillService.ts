import { Inject, Injectable } from "@nestjs/common";
import { GenericService } from "./GenericService";

import { Bill } from "src/Domain/Entities/Bill";
import BillRequestDto from "../DTOs/Bill/BillRequestDto";
import BillUpdateDto from "../DTOs/Bill/BillUpdateDto";
import BillResponseDto from "../DTOs/Bill/BillResponseDto";
import { IBillRepository } from "src/Domain/Interfaces/IBillRepository";
import { bill_mapper } from "../Mappers/bill.mapper";


@Injectable()
export class BillService extends GenericService<Bill, BillRequestDto, BillUpdateDto, BillResponseDto> {
  constructor(
    @Inject("BILL_REPOSITORY")
    private readonly billRepository: IBillRepository
  ) {
    super(
      billRepository,
      bill_mapper,
      Bill, 
      BillRequestDto, 
      BillUpdateDto, 
      BillResponseDto
    );
  }
}