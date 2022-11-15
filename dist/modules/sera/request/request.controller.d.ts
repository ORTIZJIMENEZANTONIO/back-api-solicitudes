import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { FilterRequestDto } from './dto/filter-request.dto';
import { RequestDto } from './dto/request.dto';
import { RequestService } from './request.service';
export declare class RequestController {
    private readonly requestService;
    constructor(requestService: RequestService);
    createRequest(requestDto: RequestDto): Promise<(RequestDto & import("./entity/request.entity").RequestEntity) | "Error">;
    getAllRequests(requestStatus: string, idRegionalDelegation: number, pagination: PaginationDto): Promise<{
        data: import("./entity/request.entity").RequestEntity[];
        count: number;
    }>;
    getRequestsByFilter(filter: FilterRequestDto, pagination: PaginationDto): Promise<{
        data: import("./entity/request.entity").RequestEntity[];
        count: number;
    }>;
    getRequestById(id: number): Promise<import("./entity/request.entity").RequestEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateRequest(idToUpdate: number, data: RequestDto): Promise<{
        statusCode: string;
        message: string;
        error?: undefined;
    } | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteRequest(id: number): Promise<string>;
}
