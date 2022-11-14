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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationByPropertyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class EvaluationByPropertyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 527858 }),
    __metadata("design:type", String)
], EvaluationByPropertyDto.prototype, "recordNum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 7313 }),
    __metadata("design:type", Number)
], EvaluationByPropertyDto.prototype, "propertyNum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "PROCEDENCIA" }),
    __metadata("design:type", String)
], EvaluationByPropertyDto.prototype, "evaluationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "DICTAMINADO S" }),
    __metadata("design:type", String)
], EvaluationByPropertyDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2001-08-09" }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], EvaluationByPropertyDto.prototype, "evaluationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "PROCEDENCIA" }),
    __metadata("design:type", String)
], EvaluationByPropertyDto.prototype, "evaluatorUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], EvaluationByPropertyDto.prototype, "autorithyOrderingEvaluation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], EvaluationByPropertyDto.prototype, "observations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 181648223 }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], EvaluationByPropertyDto.prototype, "registryNum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], EvaluationByPropertyDto.prototype, "evaluatingDelegationNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], EvaluationByPropertyDto.prototype, "evaluatingArea", void 0);
exports.EvaluationByPropertyDto = EvaluationByPropertyDto;
//# sourceMappingURL=evaluation-by-property.dto.js.map