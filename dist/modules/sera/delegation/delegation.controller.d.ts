import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DelegationService } from './delegation.service';
import { DelegationDTO } from './dto/delegation.dto';
export declare class DelegationController {
    private delegationService;
    constructor(delegationService: DelegationService);
    getAllDelegation(pagination: PaginationDto): Promise<{
        data: import("./entity/delegation.entity").DelegationEntity[];
        count: number;
    }>;
    getSerchDelegationByText(text: string): Promise<import("./entity/delegation.entity").DelegationEntity[]>;
    getDelegationById(id: number): Promise<DelegationDTO>;
    createDelegation(delegationDTO: DelegationDTO): Promise<(DelegationDTO & import("./entity/delegation.entity").DelegationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateDelegation(delegationDTO: DelegationDTO, id: number): Promise<any>;
    deleteDelegation(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
