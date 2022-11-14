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
exports.EvaluationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class EvaluationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 371602 }),
    __metadata("design:type", Number)
], EvaluationDto.prototype, "evaluationNum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "PROCEDENCIA" }),
    __metadata("design:type", String)
], EvaluationDto.prototype, "evaluationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 208904 }),
    __metadata("design:type", Number)
], EvaluationDto.prototype, "recordNum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "DCCR/DECRE/ATJRM/00765/2015" }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], EvaluationDto.prototype, "keyDocumentArmada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "DICTAMINADO" }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], EvaluationDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2015-05-14" }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], EvaluationDto.prototype, "evaluationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "DSANDOVAL" }),
    __metadata("design:type", String)
], EvaluationDto.prototype, "evaluatorUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], EvaluationDto.prototype, "observations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 11 }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], EvaluationDto.prototype, "evaluatingDelegationNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], EvaluationDto.prototype, "evaluatingArea", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2005-02-12" }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], EvaluationDto.prototype, "instructorDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 617734152 }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], EvaluationDto.prototype, "registryNum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], EvaluationDto.prototype, "isDelit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 455898 }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], EvaluationDto.prototype, "flyerNum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 765 }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], EvaluationDto.prototype, "arrmadaKeyNum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], EvaluationDto.prototype, "insuranceNoticeDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], EvaluationDto.prototype, "resolutionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], EvaluationDto.prototype, "resolutionNoticeDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], EvaluationDto.prototype, "folioUniversal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2015-05-14" }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], EvaluationDto.prototype, "admissionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2015-05-14" }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], EvaluationDto.prototype, "evaluationHcDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2015-05-14" }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], EvaluationDto.prototype, "admissionHcDate", void 0);
exports.EvaluationDto = EvaluationDto;
//# sourceMappingURL=evaluation.dto.js.map