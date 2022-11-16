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
exports.FilterRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const message_1 = require("../../../../shared/validation-messages/message");
class FilterRequestDto {
}
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 1, required: false }),
    __metadata("design:type", Number)
], FilterRequestDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: "2022-08-15 22:55:06", required: false }),
    __metadata("design:type", Date)
], FilterRequestDto.prototype, "applicationDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "Nombre del titular", required: false }),
    __metadata("design:type", String)
], FilterRequestDto.prototype, "nameOfOwner", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "Cargo del titular", required: false }),
    __metadata("design:type", String)
], FilterRequestDto.prototype, "holderCharge", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "800-25-00-01-03-2019-31999", required: false }),
    __metadata("design:type", String)
], FilterRequestDto.prototype, "noPaper", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: "2019-07-31T05:00:00.000Z", required: false }),
    __metadata("design:type", Date)
], FilterRequestDto.prototype, "paperDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)({
        message: message_1.Message.REQUIRED("$property"),
    }),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], FilterRequestDto.prototype, "idRegionalDelegation", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 1, required: false }),
    __metadata("design:type", Number)
], FilterRequestDto.prototype, "idRegionalDelegationOpd", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 9, required: false }),
    __metadata("design:type", Number)
], FilterRequestDto.prototype, "keyStateOfRepublic", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 624, required: false }),
    __metadata("design:type", Number)
], FilterRequestDto.prototype, "idTransference", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 1, required: false }),
    __metadata("design:type", Number)
], FilterRequestDto.prototype, "idStation", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 1, required: false }),
    __metadata("design:type", Number)
], FilterRequestDto.prototype, "idAuthority", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 1250, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "ARA470120057", required: false }),
    __metadata("design:type", String)
], FilterRequestDto.prototype, "transferenceFile", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 30, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "ELECTRONICA", required: false }),
    __metadata("design:type", String)
], FilterRequestDto.prototype, "receiptRoute", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 39, required: false }),
    __metadata("design:type", Number)
], FilterRequestDto.prototype, "affair", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 30, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "SAT_SAE", required: false }),
    __metadata("design:type", String)
], FilterRequestDto.prototype, "typeOfTransfer", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)({
        message: message_1.Message.REQUIRED("$property"),
    }),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 30, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "PAMA" }),
    __metadata("design:type", String)
], FilterRequestDto.prototype, "requestStatus", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 200, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], FilterRequestDto.prototype, "indicatedTaxpayer", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "acta_circunstanciada", required: false }),
    __metadata("design:type", String)
], FilterRequestDto.prototype, "circumstantialRecord", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "averiguacion_previa", required: false }),
    __metadata("design:type", String)
], FilterRequestDto.prototype, "previousInquiry", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], FilterRequestDto.prototype, "lawsuit", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Boolean),
    (0, class_validator_1.IsNotEmpty)({
        message: message_1.Message.REQUIRED("$property"),
    }),
    (0, class_validator_1.IsBoolean)({
        message: message_1.Message.BOOLEAN("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Boolean)
], FilterRequestDto.prototype, "viewAttr", void 0);
exports.FilterRequestDto = FilterRequestDto;
//# sourceMappingURL=filter-request.dto.js.map