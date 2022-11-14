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
exports.EvaluationByPropertyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const evaluation_by_property_dto_1 = require("./dto/evaluation-by-property.dto");
const update_evaluation_by_property_dto_1 = require("./dto/update-evaluation-by-property.dto");
const evaluation_by_property_service_1 = require("./evaluation-by-property.service");
let EvaluationByPropertyController = class EvaluationByPropertyController {
    constructor(service) {
        this.service = service;
    }
    async getAllEvaluationByProperty(pagination) {
        return await this.service.getAllEvaluationByProperty(pagination);
    }
    async getSerchSiseProcessByText(text) {
        return await this.service.getSerchByText(text);
    }
    async getEvaluationByPropertyById(id) {
        return await this.service.getEvaluationByPropertyById(id);
    }
    async createEvaluationByProperty(EvaluationByPropertyDTO) {
        const task = await this.service.createEvaluationByProperty(EvaluationByPropertyDTO);
        return task
            ? task
            : {
                statusCode: 503,
                message: 'This EvaluationByProperty was not created',
                error: 'Create Error',
            };
    }
    async updateEvaluationByProperty(id, evaluationByPropertyDTO) {
        const evaluation = await this.service.updateEvaluationByProperty(id, evaluationByPropertyDTO);
        return evaluation
            ? { statusCode: '200', message: 'Evaluation updated' }
            : { statusCode: '404', message: 'EvaluationByProperty not found', error: 'Not found' };
    }
    async deleteEvaluationByProperty(id) {
        const { affected } = await this.service.deleteEvaluationByProperty(id);
        return affected == 0
            ? { statusCode: '404', message: 'EvaluationByProperty not found', error: 'Not found' }
            : { statusCode: '200', message: 'Successfully deleted' };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de dictaminaciones por bien' }),
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
        type: [evaluation_by_property_dto_1.EvaluationByPropertyDto],
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], EvaluationByPropertyController.prototype, "getAllEvaluationByProperty", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de dictaminaciones por bien por texto' }),
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
], EvaluationByPropertyController.prototype, "getSerchSiseProcessByText", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener dicatminación por bien por llave primaria comopuesta' }),
    (0, swagger_1.ApiParam)({
        name: 'recordNumUpdt',
        type: Number,
        description: 'No. de expediente'
    }),
    (0, swagger_1.ApiParam)({
        name: 'propertyNumUpdt',
        type: Number,
        description: 'No. de dictaminación',
    }),
    (0, swagger_1.ApiParam)({
        name: 'evaluationTypeUpdt',
        type: String,
        description: 'Tipo de dictaminación'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: evaluation_by_property_dto_1.EvaluationByPropertyDto,
    }),
    (0, common_1.Get)(':recordNumUpdt/:propertyNumUpdt/:evaluationTypeUpdt'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_evaluation_by_property_dto_1.UpdateEvaluationByPropertyDto]),
    __metadata("design:returntype", Promise)
], EvaluationByPropertyController.prototype, "getEvaluationByPropertyById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear dicatminación por bien' }),
    (0, swagger_1.ApiBody)({
        type: evaluation_by_property_dto_1.EvaluationByPropertyDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: evaluation_by_property_dto_1.EvaluationByPropertyDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluation_by_property_dto_1.EvaluationByPropertyDto]),
    __metadata("design:returntype", Promise)
], EvaluationByPropertyController.prototype, "createEvaluationByProperty", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar dicatminación por bien por llave primaria comopuesta' }),
    (0, swagger_1.ApiParam)({
        name: 'recordNumUpdt',
        type: Number,
        description: 'No. de expediente'
    }),
    (0, swagger_1.ApiParam)({
        name: 'propertyNumUpdt',
        type: Number,
        description: 'No. de dictaminación',
    }),
    (0, swagger_1.ApiParam)({
        name: 'evaluationTypeUpdt',
        type: String,
        description: 'Tipo de dictaminación'
    }),
    (0, swagger_1.ApiBody)({
        type: evaluation_by_property_dto_1.EvaluationByPropertyDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: evaluation_by_property_dto_1.EvaluationByPropertyDto,
    }),
    (0, common_1.Put)(':recordNumUpdt/:propertyNumUpdt/:evaluationTypeUpdt'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_evaluation_by_property_dto_1.UpdateEvaluationByPropertyDto, evaluation_by_property_dto_1.EvaluationByPropertyDto]),
    __metadata("design:returntype", Promise)
], EvaluationByPropertyController.prototype, "updateEvaluationByProperty", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Elimminar dicatminación por bien' }),
    (0, swagger_1.ApiParam)({
        name: 'recordNumUpdt',
        type: Number,
        description: 'No. de expediente'
    }),
    (0, swagger_1.ApiParam)({
        name: 'propertyNumUpdt',
        type: Number,
        description: 'No. de dictaminación',
    }),
    (0, swagger_1.ApiParam)({
        name: 'evaluationTypeUpdt',
        type: String,
        description: 'Tipo de dictaminación'
    }),
    (0, common_1.Delete)(':recordNumUpdt/:propertyNumUpdt/:evaluationTypeUpdt'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_evaluation_by_property_dto_1.UpdateEvaluationByPropertyDto]),
    __metadata("design:returntype", Promise)
], EvaluationByPropertyController.prototype, "deleteEvaluationByProperty", null);
EvaluationByPropertyController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('evaluation-by-property'),
    (0, swagger_1.ApiTags)('evaluation-by-property'),
    __metadata("design:paramtypes", [evaluation_by_property_service_1.EvaluationByPropertyService])
], EvaluationByPropertyController);
exports.EvaluationByPropertyController = EvaluationByPropertyController;
//# sourceMappingURL=evaluation-by-property.controller.js.map