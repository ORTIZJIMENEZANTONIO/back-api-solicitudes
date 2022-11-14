import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DelegationDTO } from './dto/delegation.dto';
import { DelegationEntity } from './entity/delegation.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class DelegationService {
    private entity;
    private readonly logger;
    constructor(entity: Repository<DelegationEntity>, logger: Logger);
    getAllDelegation({ inicio, pageSize }: PaginationDto): Promise<{
        data: DelegationEntity[];
        count: number;
    }>;
    getSerchDelegationByText(text: string): Promise<DelegationEntity[]>;
    getDelegationById(id: number): Promise<DelegationDTO>;
    createDelegation(delegationDTO: DelegationDTO): Promise<DelegationDTO & DelegationEntity>;
    updateDelegation(id: number, delegationDTO: DelegationDTO): Promise<DelegationDTO | any>;
    deleteDelegation(id: number): Promise<import("typeorm").DeleteResult>;
}
