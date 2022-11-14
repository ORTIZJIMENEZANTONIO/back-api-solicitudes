import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { EvaluationByPropertyDto } from './dto/evaluation-by-property.dto';
import { UpdateEvaluationByPropertyDto } from './dto/update-evaluation-by-property.dto';
import { EvaluationByPropertyService } from './evaluation-by-property.service';
export declare class EvaluationByPropertyController {
    private service;
    constructor(service: EvaluationByPropertyService);
    getAllEvaluationByProperty(pagination: PaginationDto): Promise<{
        data: import("./entities/evaluation-by-property.entity").EvaluationByPropertyEntity[];
        count: number;
    }>;
    getSerchSiseProcessByText(text: string): Promise<import("./entities/evaluation-by-property.entity").EvaluationByPropertyEntity[]>;
    getEvaluationByPropertyById(id: UpdateEvaluationByPropertyDto): Promise<import("./entities/evaluation-by-property.entity").EvaluationByPropertyEntity>;
    createEvaluationByProperty(EvaluationByPropertyDTO: EvaluationByPropertyDto): Promise<(EvaluationByPropertyDto & import("./entities/evaluation-by-property.entity").EvaluationByPropertyEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateEvaluationByProperty(id: UpdateEvaluationByPropertyDto, evaluationByPropertyDTO: EvaluationByPropertyDto): Promise<{
        statusCode: string;
        message: string;
        error?: undefined;
    } | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteEvaluationByProperty(id: UpdateEvaluationByPropertyDto): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
