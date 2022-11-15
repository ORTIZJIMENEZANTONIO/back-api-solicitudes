import { Repository } from "typeorm";
import { RequestEntity } from "./entity/request.entity";
import { RequestDto } from "./dto/request.dto";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { FilterRequestDto } from "./dto/filter-request.dto";
export declare class RequestService {
    private entity;
    constructor(entity: Repository<RequestEntity>);
    createRequest(requestDto: RequestDto): Promise<RequestDto & RequestEntity>;
    getAllRequests(filter: FilterRequestDto, { inicio, pageSize }: PaginationDto): Promise<{
        data: RequestEntity[];
        count: number;
    }>;
    getRequestsByFilter(filter: FilterRequestDto, { inicio, pageSize }: PaginationDto): Promise<{
        data: RequestEntity[];
        count: number;
    }>;
    getRequestById(id: number): Promise<RequestEntity>;
    updateRequest(id: number, requestDto: RequestDto): Promise<import("typeorm").UpdateResult>;
    deleteRequest(id: number): Promise<number>;
}
