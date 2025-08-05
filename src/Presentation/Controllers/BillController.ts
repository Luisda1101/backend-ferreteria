import { Controller, Post, Body, Get, Res, Param, Put, Delete, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ApiParam } from '@nestjs/swagger';
import { BillService } from 'src/Application/Services/BillService';
import BillRequestDto from 'src/Application/DTOs/Bill/BillRequestDto';

@Controller('bills')
export class BillController {

    constructor(private readonly _billService: BillService) { }

    @Get()
    async getAllBills(@Res() res: Response) {
        const response = await this._billService.getAll();
        return response.isSuccess
            ? res.status(HttpStatus.OK).json(response)
            : res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(response);
    }

    @Post()
    async createBills(@Res() res: Response, @Body() createBillDTO: BillRequestDto) {
        const response = await this._billService.create(createBillDTO);
        return response.isSuccess
            ? res.status(HttpStatus.CREATED).json(response)
            : res.status(HttpStatus.BAD_REQUEST).json(response);
    }

    @ApiParam({ name: 'id', type: String, description: 'ID del cliente' })
    @Get(":id")
    async getBillById(@Res() res: Response, @Param('id') id: string) {
        const response = await this._billService.getById(id);
        return response.isSuccess
            ? res.status(HttpStatus.OK).json(response)
            : res.status(HttpStatus.NOT_FOUND).json(response);
    }

    @ApiParam({ name: 'id', type: String, description: 'ID del cliente' })
    @Put(":id")
    async updateBill(@Res() res: Response, @Param('id') id: string, @Body() updateBillDTO: BillRequestDto) {
        const response = await this._billService.update(id, updateBillDTO);
        return response.isSuccess
            ? res.status(HttpStatus.OK).json(response)
            : res.status(HttpStatus.BAD_REQUEST).json(response);
    }

    @ApiParam({ name: 'id', type: String, description: 'ID del servicio de ayuda' })
    @Delete(":id")
    async deleteBill(@Res() res: Response, @Param('id') id: string) {
        const response = await this._billService.delete(id);
        return response.isSuccess
            ? res.status(HttpStatus.OK).json(response)
            : res.status(HttpStatus.NOT_FOUND).json(response);
    }
}