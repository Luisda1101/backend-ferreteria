import { Controller, Post, Body, Get, Res, Param, Put, Delete, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CustomerService } from 'src/Application/Services/CustomerService';
import { ApiParam } from '@nestjs/swagger';
import CustomerRequestDto from 'src/Application/DTOs/Customer/CustomerRequestDto';

@Controller('customers')
export class CustomerController {

    constructor(private readonly _customerService: CustomerService) { }

    @Get()
    async getAllCustomers(@Res() res: Response) {
        const response = await this._customerService.getAll();
        return response.isSuccess
            ? res.status(HttpStatus.OK).json(response)
            : res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(response);
    }

    @Post()
    async createCustomer(@Res() res: Response, @Body() createCustomerDTO: CustomerRequestDto) {
        const response = await this._customerService.create(createCustomerDTO);
        return response.isSuccess
            ? res.status(HttpStatus.CREATED).json(response)
            : res.status(HttpStatus.BAD_REQUEST).json(response);
    }

    @ApiParam({ name: 'id', type: String, description: 'ID del cliente' })
    @Get(":id")
    async getCustomerById(@Res() res: Response, @Param('id') id: string) {
        const response = await this._customerService.getById(id);
        return response.isSuccess
            ? res.status(HttpStatus.OK).json(response)
            : res.status(HttpStatus.NOT_FOUND).json(response);
    }

    @ApiParam({ name: 'id', type: String, description: 'ID del cliente' })
    @Put(":id")
    async updateCustomer(@Res() res: Response, @Param('id') id: string, @Body() updateCustomerDTO: CustomerRequestDto) {
        const response = await this._customerService.update(id, updateCustomerDTO);
        return response.isSuccess
            ? res.status(HttpStatus.OK).json(response)
            : res.status(HttpStatus.BAD_REQUEST).json(response);
    }

    @ApiParam({ name: 'id', type: String, description: 'ID del servicio de ayuda' })
    @Delete(":id")
    async deleteCustomer(@Res() res: Response, @Param('id') id: string) {
        const response = await this._customerService.delete(id);
        return response.isSuccess
            ? res.status(HttpStatus.OK).json(response)
            : res.status(HttpStatus.NOT_FOUND).json(response);
    }
}