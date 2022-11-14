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
exports.UpdtLinesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const updt_lines_dto_1 = require("./dto/updt-lines.dto");
const updt_lines_service_1 = require("./updt-lines.service");
let UpdtLinesController = class UpdtLinesController {
    constructor(updtLineService) {
        this.updtLineService = updtLineService;
    }
    async updateLines(updtLine) {
        return await this.updtLineService.updateLines(updtLine);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'ACTUALIZA LAS LINEAS DE REFERENCIA DE LA LINEA DE CAPTURA' }),
    (0, swagger_1.ApiBody)({
        type: updt_lines_dto_1.UpdtLinesDto,
        description: 'Información de la linea'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Actualizó linea',
        type: updt_lines_dto_1.UpdtLinesDto,
    }),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updt_lines_dto_1.UpdtLinesDto]),
    __metadata("design:returntype", Promise)
], UpdtLinesController.prototype, "updateLines", null);
UpdtLinesController = __decorate([
    (0, swagger_1.ApiTags)('updt-lines'),
    (0, common_1.Controller)('updt-lines'),
    (0, swagger_1.ApiCreatedResponse)(),
    __metadata("design:paramtypes", [updt_lines_service_1.UpdtLinesService])
], UpdtLinesController);
exports.UpdtLinesController = UpdtLinesController;
//# sourceMappingURL=updt-lines.controller.js.map