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
exports.EvaluationByPropertyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nest_winston_1 = require("nest-winston");
const typeorm_2 = require("typeorm");
const evaluation_by_property_entity_1 = require("./entities/evaluation-by-property.entity");
let EvaluationByPropertyService = class EvaluationByPropertyService {
    constructor(entity, logger) {
        this.entity = entity;
        this.logger = logger;
    }
    async getAllEvaluationByProperty(pagination) {
        const { inicio = 1, pageSize = 10, text } = pagination;
        const queryBuilder = this.entity.createQueryBuilder('table');
        if (text) {
            queryBuilder.where(`LOWER(table.evaluationType) LIKE '%${text.toLowerCase()}%'`);
        }
        queryBuilder.orderBy('table.recordNum', 'DESC');
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
            .where(`LOWER(table.evaluationType) LIKE '%${text.toLowerCase()}%'`)
            .limit(10)
            .getMany();
    }
    async getEvaluationByPropertyById(id) {
        const evaluation = await this.entity.findOne({
            where: {
                recordNum: id.recordNumUpdt,
                propertyNum: id.propertyNumUpdt,
                evaluationType: id.evaluationTypeUpdt,
            },
        });
        if (!evaluation) {
            throw new common_1.NotFoundException(`Evaluation type not found with recordNum: ${id.recordNumUpdt}, propertyNum: ${id.propertyNumUpdt} and evaluationType: ${id.evaluationTypeUpdt}`);
        }
        return evaluation;
    }
    async createEvaluationByProperty(evaluationByProperty) {
        const isExisting = await this.entity.findOne({
            where: {
                recordNum: evaluationByProperty.recordNum,
                propertyNum: evaluationByProperty.propertyNum,
                evaluationType: evaluationByProperty.evaluationType,
            },
        });
        if (isExisting) {
            throw new common_1.NotAcceptableException(`Evaluation existing`);
        }
        return await this.entity.save(evaluationByProperty);
    }
    async updateEvaluationByProperty(id, evaluationByPropertyDto) {
        delete evaluationByPropertyDto.recordNum;
        delete evaluationByPropertyDto.evaluationType;
        delete evaluationByPropertyDto.propertyNum;
        const { affected } = await this.entity.update({
            recordNum: id.recordNumUpdt,
            propertyNum: id.propertyNumUpdt,
            evaluationType: id.evaluationTypeUpdt,
        }, evaluationByPropertyDto);
        return affected;
    }
    async deleteEvaluationByProperty(id) {
        const evaluation = await this.entity.findOne({
            where: {
                recordNum: id.recordNumUpdt,
                propertyNum: id.propertyNumUpdt,
                evaluationType: id.evaluationTypeUpdt,
            },
        });
        if (!evaluation) {
            throw new common_1.NotFoundException(`Evaluation type not found with recordNum: ${id.recordNumUpdt}, propertyNum: ${id.propertyNumUpdt} and evaluationType: ${id.evaluationTypeUpdt}`);
        }
        return await this.entity.delete({
            recordNum: id.recordNumUpdt,
            propertyNum: id.propertyNumUpdt,
            evaluationType: id.evaluationTypeUpdt,
        });
    }
};
EvaluationByPropertyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(evaluation_by_property_entity_1.EvaluationByPropertyEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger])
], EvaluationByPropertyService);
exports.EvaluationByPropertyService = EvaluationByPropertyService;
//# sourceMappingURL=evaluation-by-property.service.js.map