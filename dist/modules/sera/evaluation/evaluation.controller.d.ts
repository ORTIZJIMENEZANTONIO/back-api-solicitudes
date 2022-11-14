import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { EvaluationService } from './evaluation.service';
import { EvaluationDto } from './dto/evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
export declare class EvaluationController {
    private service;
    constructor(service: EvaluationService);
    getAllEvaluation(pagination: PaginationDto): Promise<{
        data: import("./entities/evalutaion.entity").EvaluationEntity[];
        count: number;
    }>;
    getSerchSiseProcessByText(text: string): Promise<import("./entities/evalutaion.entity").EvaluationEntity[]>;
    getEvaluationById(id: UpdateEvaluationDto): Promise<import("./entities/evalutaion.entity").EvaluationEntity>;
    createEvaluation(EvaluationDTO: EvaluationDto): Promise<(EvaluationDto & import("./entities/evalutaion.entity").EvaluationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateEvaluation(id: UpdateEvaluationDto, EvaluationDTO: EvaluationDto): Promise<{
        statusCode: string;
        message: string;
        error?: undefined;
    } | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteEvaluation(id: UpdateEvaluationDto): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
