"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nest_winston_1 = require("nest-winston");
const typeorm_2 = require("typeorm");
const evalutaion_entity_1 = require("./entities/evalutaion.entity");
let EvaluationService = class EvaluationService {
    constructor(entity, logger) {
        this.entity = entity;
        this.logger = logger;
    }
    async getAllEvaluations(pagination) {
        const { inicio = 1, pageSize = 10, text } = pagination;
        const queryBuilder = this.entity.createQueryBuilder('table');
        if (text) {
            queryBuilder.where(`LOWER(table.evaluationType) LIKE '%${text.toLowerCase()}%'`);
        }
        queryBuilder.orderBy('table.evaluationNum', 'DESC');
        queryBuilder.take(pageSize || 10);
        queryBuilder.skip((inicio - 1) * pageSize || 0);
        const [result, total] = await queryBuilder.getManyAndCount();
        return {
            data: result,
            count: total,
        };
    }
    async getSerchByText(text) {
        return await this.entity
            .createQueryBuilder('table')
            .where(`LOWER(table.name) LIKE '%${text.toLowerCase()}%'`)
            .limit(10)
            .getMany();
    }
    async getEvaluationById(id) {
        const evaluation = await this.entity.findOneBy({
            evaluationNum: id.evaluationNumUpdt,
            evaluationType: id.evaluationTypeUpdt,
        });
        if (!evaluation) {
            throw new common_1.NotFoundException(`Evaluation not found with num: ${id.evaluationNumUpdt} and type: ${id.evaluationTypeUpdt} `);
        }
        return evaluation;
    }
    async createEvaluation(evaluation) {
        const exixsting = await this.entity.findOne({
            where: {
                evaluationNum: evaluation.evaluationNum,
                evaluationType: evaluation.evaluationType,
            },
        });
        if (exixsting) {
            throw new common_1.NotAcceptableException(`Evaluation existing`);
        }
        return await this.entity.save(evaluation);
    }
    async updateEvaluation(id, evaluationDto) {
        delete evaluationDto.evaluationNum;
        delete evaluationDto.evaluationType;
        const { affected } = await this.entity.update({
            evaluationNum: id.evaluationNumUpdt,
            evaluationType: id.evaluationTypeUpdt,
        }, evaluationDto);
        return affected;
    }
    async deleteEvaluation(id) {
        const evaluation = await this.entity.findOne({
            where: {
                evaluationNum: id.evaluationNumUpdt,
                evaluationType: id.evaluationTypeUpdt,
            },
        });
        if (!evaluation) {
            throw new common_1.NotFoundException(`Evaluation not found with num: ${id.evaluationNumUpdt} and type: ${id.evaluationTypeUpdt} `);
        }
        return await this.entity.delete({
            evaluationNum: id.evaluationNumUpdt,
            evaluationType: id.evaluationTypeUpdt,
        });
    }
};
EvaluationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(evalutaion_entity_1.EvaluationEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger])
], EvaluationService);
exports.EvaluationService = EvaluationService;
//# sourceMappingURL=evaluation.service.js.map