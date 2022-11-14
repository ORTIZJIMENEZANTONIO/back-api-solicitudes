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
exports.RequestController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const filter_request_dto_1 = require("./dto/filter-request.dto");
const request_dto_1 = require("./dto/request.dto");
const request_service_1 = require("./request.service");
let RequestController = class RequestController {
    constructor(requestService) {
        this.requestService = requestService;
    }
    async createRequest(requestDto) {
        const requestCreated = await this.requestService.createRequest(requestDto);
        return requestCreated
            ? requestCreated
            : { statusCode: 503, message: "This Request was not created", error: "Create Error" };
    }
    async getAllRequests(requestStatus, idRegionalDelegation, pagination) {
        return await this.requestService.getAllRequests({ requestStatus, idRegionalDelegation }, pagination);
    }
    async getRequestsByFilter(filter, pagination) {
        return await this.requestService.getRequestsByFilter(filter, pagination);
    }
    async getRequestById(id) {
        const warehouseFound = await this.requestService.getRequestById(id);
        return warehouseFound
            ? warehouseFound
            : { statusCode: '404', message: 'Request not found', error: "Not found" };
    }
    async updateRequest(idToUpdate, data) {
        const { affected } = await this.requestService.updateRequest(idToUpdate, data);
        return affected > 0
            ? { statusCode: '200', message: 'Request UPDATED SUCCESSFULLY' }
            : { statusCode: '404', message: 'Request not found', error: "Not found" };
    }
    async deleteRequest(id) {
        const { affected } = await this.requestService.deleteRequest(id);
        return affected == 0
            ? { statusCode: '404', message: 'Request not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva solicitud' }),
    (0, swagger_1.ApiBody)({
        type: request_dto_1.RequestDto,
        description: 'Información de la solicitud a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda solicitud',
        type: request_dto_1.RequestDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.RequestDto]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "createRequest", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las solicitudes' }),
    (0, swagger_1.ApiParam)({
        name: 'requestStatus',
        description: 'Estatus'
    }),
    (0, swagger_1.ApiParam)({
        name: 'idRegionalDelegation',
        description: 'Identificador de la delegación regional'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'inicio'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'pageSize'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de solicitudes existentes',
        type: request_dto_1.RequestDto,
    }),
    (0, common_1.Get)(':requestStatus/:idRegionalDelegation'),
    __param(0, (0, common_1.Param)('requestStatus')),
    __param(1, (0, common_1.Param)('idRegionalDelegation')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "getAllRequests", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las solicitudes filtradas' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de solicitudes existentes - filtro',
        type: request_dto_1.RequestDto,
    }),
    (0, common_1.Post)("filter"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_request_dto_1.FilterRequestDto, pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "getRequestsByFilter", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener solicitud por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la solicitud'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Solicitud obtenida por su identificador',
        type: request_dto_1.RequestDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "getRequestById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar solicitud' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate',
        description: 'Identificador numérico de la solicitud'
    }),
    (0, swagger_1.ApiBody)({
        type: request_dto_1.RequestDto,
        description: 'Objeto de la solicitud a modificar'
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, request_dto_1.RequestDto]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "updateRequest", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar solicitud por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la solicitud a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar solicitud por su identificador',
        type: request_dto_1.RequestDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "deleteRequest", null);
RequestController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('request'),
    (0, swagger_1.ApiTags)('request'),
    __metadata("design:paramtypes", [request_service_1.RequestService])
], RequestController);
exports.RequestController = RequestController;
//# sourceMappingURL=request.controller.js.map