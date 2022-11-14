import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { EvaluationEntity } from './entities/evalutaion.entity';
import { EvaluationDto } from './dto/evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
export declare class EvaluationService {
    private entity;
    private readonly logger;
    constructor(entity: Repository<EvaluationEntity>, logger: Logger);
    getAllEvaluations(pagination: PaginationDto): Promise<{
        data: EvaluationEntity[];
        count: number;
    }>;
    getSerchByText(text: string): Promise<EvaluationEntity[]>;
    getEvaluationById(id: UpdateEvaluationDto): Promise<EvaluationEntity>;
    createEvaluation(evaluation: EvaluationDto): Promise<EvaluationDto & EvaluationEntity>;
    updateEvaluation(id: UpdateEvaluationDto, evaluationDto: EvaluationDto): Promise<number>;
    deleteEvaluation(id: UpdateEvaluationDto): Promise<import("typeorm").DeleteResult>;
}
