import { UpdtLinesDto } from './dto/updt-lines.dto';
import { UpdtLinesService } from './updt-lines.service';
export declare class UpdtLinesController {
    private readonly updtLineService;
    constructor(updtLineService: UpdtLinesService);
    updateLines(updtLine: UpdtLinesDto): Promise<any>;
}
