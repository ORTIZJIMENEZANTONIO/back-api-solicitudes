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
exports.RequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const message_1 = require("../../../../shared/validation-messages/message");
class RequestDto {
}
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, swagger_1.ApiProperty)({ example: "Identificador de solicitud", required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: "Identificador del expediente", required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "idRecord", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: "2022-08-15 22:55:06", required: false }),
    __metadata("design:type", Date)
], RequestDto.prototype, "applicationDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: "2022-08-15 22:55:06", required: false }),
    __metadata("design:type", Date)
], RequestDto.prototype, "receptionDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "Nombre del titular", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "nameOfOwner", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "Cargo del titular", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "holderCharge", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 30, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "5544337788", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "phoneOfOwner", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "Email del titular", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "emailOfOwner", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: "624", required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "idTransference", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: "1", required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "idStation", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: "1", required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "idAuthority", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: "1", required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "idRegionalDelegation", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "Remitente", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "sender", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 1500, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "Observaciones", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "observations", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "Usuario destino", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "targetUser", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 1, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "urgentPriority", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 200, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "indicatedTaxpayer", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 1250, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({
        example: "Expediente transferente: ARA470120057",
        required: false,
    }),
    __metadata("design:type", String)
], RequestDto.prototype, "transferenceFile", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 1500, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "transferEntNotes", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: "25351", required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "idAddress", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: "2", required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "originInfo", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "acta_circunstanciada", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "circumstantialRecord", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "averiguacion_previa", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "previousInquiry", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "lawsuit", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "noProtect", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "tocaPenal", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "800-25-00-01-03-2019-31999", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "noPaper", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: "2019-07-31T05:00:00.000Z", required: false }),
    __metadata("design:type", Date)
], RequestDto.prototype, "paperDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "indicated", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "publicMinistry", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "court", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "crime", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 30, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "ELECTRONICA", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "receiptRoute", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "destinationManagement", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: "2", required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "affair", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 60, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({
        example: "800-25-00-01-03-2019",
        maxLength: 60,
        required: false,
    }),
    __metadata("design:type", String)
], RequestDto.prototype, "satDeterminant", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 200, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, maxLength: 200, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "satDirectory", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "satZoneCoordinator", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "pepv860106v49", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "userCreated", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: "2019-08-02T05:00:00.000Z", required: false }),
    __metadata("design:type", Date)
], RequestDto.prototype, "creationDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "amercado", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "userModification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2019-08-22T05:00:00.000Z", required: false }),
    __metadata("design:type", Date)
], RequestDto.prototype, "modificationDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 30, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "SAT_SAE", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "typeOfTransfer", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "domainExtinction", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "11", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "version", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 20, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "TE", maxLength: 20, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "targetUserType", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "trialType", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 50, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "PAMA", maxLength: 50, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "typeRecord", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 30, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "PAMA", maxLength: 30, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "requestStatus", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 20, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "CREACION", required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "fileLeagueType", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: "2019-08-16T05:00:00.000Z", required: false }),
    __metadata("design:type", Date)
], RequestDto.prototype, "fileLeagueDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 2000, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, maxLength: 2000, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "rejectionComment", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, maxLength: 100, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "authorityOrdering", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 30, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, maxLength: 30, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "instanceBpm", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 200, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, maxLength: 200, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "trial", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 30, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, maxLength: 30, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "compensationType", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "idStateRequest", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 0, required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "searchSiab", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: "2019-08-16T05:00:00.000Z", required: false }),
    __metadata("design:type", Date)
], RequestDto.prototype, "priorityDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 0, required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "numberOfRejections", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 20, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: "SAE503126", maxLength: 20, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "idRulingDocument", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 30, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({
        example: "DCCR/DECRE/DRM/ATARM/1470/2019",
        maxLength: 30,
        required: false,
    }),
    __metadata("design:type", String)
], RequestDto.prototype, "reportSheet", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, maxLength: 100, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "nameRecipientRuling", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({
        example: "DELEGACIÓN REGIONAL METROPOLITANA",
        maxLength: 100,
        required: false,
    }),
    __metadata("design:type", String)
], RequestDto.prototype, "postRecipientRuling", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 4000, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({
        example: "parrafo1_dictamen",
        maxLength: 4000,
        required: false,
    }),
    __metadata("design:type", String)
], RequestDto.prototype, "paragraphOneRuling", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 4000, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({
        example: "parrafo2_dictamen",
        maxLength: 4000,
        required: false,
    }),
    __metadata("design:type", String)
], RequestDto.prototype, "paragraphTwoRuling", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({
        example: "ANIBAL MERCADO MARTINEZ",
        maxLength: 100,
        required: false,
    }),
    __metadata("design:type", String)
], RequestDto.prototype, "nameSignatoryRuling", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({
        example: "ADMINISTRADOR TITULAR DE ADMINISTRACION Y RECUPERACION METROPOLITANA",
        maxLength: 100,
        required: false,
    }),
    __metadata("design:type", String)
], RequestDto.prototype, "postSignatoryRuling", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 200, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, maxLength: 200, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "ccpRuling", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 100, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({
        example: "EMILIO RODRIGUEZ ESPINO",
        maxLength: 100,
        required: false,
    }),
    __metadata("design:type", String)
], RequestDto.prototype, "rulingCreatorName", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 1470, required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "rulingSheetNumber", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 50, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, maxLength: 50, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "registrationCoordinatorSae", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$property") }),
    (0, class_validator_1.Length)(1, 1000, {
        message: message_1.Message.LENGTH("$property", "$constraint1 $constraint2"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, maxLength: 1000, required: false }),
    __metadata("design:type", String)
], RequestDto.prototype, "emailNotification", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 9, required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "keyStateOfRepublic", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 1128877, required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "instanceBpel", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: "2019-08-16T05:00:00.000Z", required: false }),
    __metadata("design:type", Date)
], RequestDto.prototype, "verificationDateCump", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: message_1.Message.NUMBER("$property") }),
    (0, swagger_1.ApiProperty)({ example: 12210, required: false }),
    __metadata("design:type", Number)
], RequestDto.prototype, "idRecordTmp", void 0);
exports.RequestDto = RequestDto;
//# sourceMappingURL=request.dto.js.map