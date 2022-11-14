import { WarehouseService } from './warehouse.service';
import { WarehouseDto } from './dto/warehouse.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class WarehouseController {
    private readonly warehouseService;
    constructor(warehouseService: WarehouseService);
    createWarehouse(warehouseDto: WarehouseDto): Promise<(WarehouseDto & import("./entities/warehouse.entity").WarehouseEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllWarehouses(pagination: PaginationDto): Promise<{
        data: import("./entities/warehouse.entity").WarehouseEntity[];
        count: number;
    }>;
    getWarehouseById(id: number): Promise<import("./entities/warehouse.entity").WarehouseEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateWarehouse(idToUpdate: number, data: WarehouseDto): Promise<import("./entities/warehouse.entity").WarehouseEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteWarehouse(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
