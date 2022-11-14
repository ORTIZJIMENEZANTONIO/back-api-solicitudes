import { Repository } from 'typeorm';
import { WarehouseEntity } from '../warehouse/entities/warehouse.entity';
import { UpdtLinesDto } from './dto/updt-lines.dto';
export declare class UpdtLinesService {
    private warehouseRepository;
    constructor(warehouseRepository: Repository<WarehouseEntity>);
    updateLines(updtLine: UpdtLinesDto): Promise<any>;
}
