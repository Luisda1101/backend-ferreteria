import { Bill } from '../Entities/Bill';
import { IGenericRepository } from './IGenericRepository';
import { Injectable } from '@nestjs/common';

export interface IBillRepository extends IGenericRepository<Bill> {

}