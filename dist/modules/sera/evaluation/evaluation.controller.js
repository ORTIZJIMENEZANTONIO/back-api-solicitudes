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
exports.EvaluationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const evaluation_service_1 = require("./evaluation.service");
const evaluation_dto_1 = require("./dto/evaluation.dto");
const update_evaluation_dto_1 = require("./dto/update-evaluation.dto");
let EvaluationController = class EvaluationController {
    constructor(service) {
        this.service = service;
    }
    async getAllEvaluation(pagination) {
        return await this.service.getAllEvaluations(pagination);
    }
    async getSerchSiseProcessByText(text) {
        return await this.service.getSerchByText(text);
    }
    async getEvaluationById(id) {
        return await this.service.getEvaluationById(id);
    }
    async createEvaluation(EvaluationDTO) {
        const task = await this.service.createEvaluation(EvaluationDTO);
        return task
            ? task
            : {
                statusCode: 503,
                message: 'This Evaluation was not created',
                error: 'Create Error',
            };
    }
    async updateEvaluation(id, EvaluationDTO) {
        const evaluation = await this.service.updateEvaluation(id, EvaluationDTO);
        return evaluation
            ? { statusCode: '200', message: 'Evaluation updated' }
            : { statusCode: '404', message: 'Evaluation not found', error: 'Not found' };
    }
    async deleteEvaluation(id) {
        const { affected } = await this.service.deleteEvaluation(id);
        return affected == 0
            ? { statusCode: '404', message: 'Evaluation not found', error: 'Not found' }
            : { statusCode: '200', message: 'Successfully deleted' };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de  dictminaciones' }),
    (0, swagger_1.ApiQuery)({
        name: 'inicio',
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'pageSize',
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'text',
        type: String,
        required: false
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [evaluation_dto_1.EvaluationDto],
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], EvaluationController.prototype, "getAllEvaluation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de dictminaciones por texto' }),
    (0, swagger_1.ApiQuery)({
        name: 'text',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de lotes',
        type: [pagination_dto_1.PaginationDto],
    }),
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('text')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EvaluationController.prototype, "getSerchSiseProcessByText", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener dictminaciones por id' }),
    (0, swagger_1.ApiParam)({
        name: 'evaluationNumUpdt',
        type: Number,
        description: 'Identificador de lote',
    }),
    (0, swagger_1.ApiParam)({
        name: 'evaluationTypeUpdt',
        type: Number,
        description: 'Identificador de lote',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: evaluation_dto_1.EvaluationDto,
    }),
    (0, common_1.Get)(':evaluationNumUpdt/:evaluationTypeUpdt'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_evaluation_dto_1.UpdateEvaluationDto]),
    __metadata("design:returntype", Promise)
], EvaluationController.prototype, "getEvaluationById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear dictminación' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: evaluation_dto_1.EvaluationDto,
    }),
    (0, swagger_1.ApiBody)({
        type: evaluation_dto_1.EvaluationDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluation_dto_1.EvaluationDto]),
    __metadata("design:returntype", Promise)
], EvaluationController.prototype, "createEvaluation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar dictminación por id' }),
    (0, swagger_1.ApiParam)({
        name: 'evaluationNumUpdt',
        type: Number,
        description: 'Identificador de lote',
    }),
    (0, swagger_1.ApiParam)({
        name: 'evaluationTypeUpdt',
        type: Number,
        description: 'Identificador de lote',
    }),
    (0, swagger_1.ApiBody)({
        type: evaluation_dto_1.EvaluationDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: evaluation_dto_1.EvaluationDto,
    }),
    (0, common_1.Put)(':evaluationNumUpdt/:evaluationTypeUpdt'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_evaluation_dto_1.UpdateEvaluationDto, evaluation_dto_1.EvaluationDto]),
    __metadata("design:returntype", Promise)
], EvaluationController.prototype, "updateEvaluation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar dictminación por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'evaluationNumUpdt',
        type: Number,
        description: 'Identificador de lote',
    }),
    (0, swagger_1.ApiParam)({
        name: 'evaluationTypeUpdt',
        type: Number,
        description: 'Identificador de lote',
    }),
    (0, common_1.Delete)(':evaluationNumUpdt/:evaluationTypeUpdt'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_evaluation_dto_1.UpdateEvaluationDto]),
    __metadata("design:returntype", Promise)
], EvaluationController.prototype, "deleteEvaluation", null);
EvaluationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('evaluation'),
    (0, swagger_1.ApiTags)('evaluation'),
    __metadata("design:paramtypes", [evaluation_service_1.EvaluationService])
], EvaluationController);
exports.EvaluationController = EvaluationController;
//# sourceMappingURL=evaluation.controller.js.map