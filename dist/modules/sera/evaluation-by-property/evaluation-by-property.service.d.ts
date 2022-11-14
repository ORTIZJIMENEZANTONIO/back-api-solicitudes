import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { EvaluationByPropertyEntity } from './entities/evaluation-by-property.entity';
import { EvaluationByPropertyDto } from './dto/evaluation-by-property.dto';
import { UpdateEvaluationByPropertyDto } from './dto/update-evaluation-by-property.dto';
export declare class EvaluationByPropertyService {
    private entity;
    private readonly logger;
    constructor(entity: Repository<EvaluationByPropertyEntity>, logger: Logger);
    getAllEvaluationByProperty(pagination: PaginationDto): Promise<{
        data: EvaluationByPropertyEntity[];
        count: number;
    }>;
    getSerchByText(text: string): Promise<EvaluationByPropertyEntity[]>;
    getEvaluationByPropertyById(id: UpdateEvaluationByPropertyDto): Promise<EvaluationByPropertyEntity>;
    createEvaluationByProperty(evaluationByProperty: EvaluationByPropertyDto): Promise<EvaluationByPropertyDto & EvaluationByPropertyEntity>;
    updateEvaluationByProperty(id: UpdateEvaluationByPropertyDto, evaluationByPropertyDto: EvaluationByPropertyDto): Promise<number>;
    deleteEvaluationByProperty(id: UpdateEvaluationByPropertyDto): Promise<import("typeorm").DeleteResult>;
}
