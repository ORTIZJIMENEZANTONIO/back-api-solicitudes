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
exports.DelegationEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let DelegationEntity = class DelegationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'numeric', name: 'id_delegacion' }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'numeric', name: 'etapa_edo' }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "etapaEdo", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'character varying', name: 'cve_estado', length: 30 }),
    __metadata("design:type", String)
], DelegationEntity.prototype, "cveState", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'descripcion', length: 150 }),
    __metadata("design:type", String)
], DelegationEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'domicilio_oficina', length: 200 }),
    __metadata("design:type", String)
], DelegationEntity.prototype, "addressOffice", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'delegado_regional', length: 200 }),
    __metadata("design:type", String)
], DelegationEntity.prototype, "regionalDelegate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'cve_zona', length: 150 }),
    __metadata("design:type", String)
], DelegationEntity.prototype, "cveZone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'ciudad', length: 100 }),
    __metadata("design:type", String)
], DelegationEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: 'status' }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: 'iva' }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "iva", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: 'no_registro' }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "noRegister", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: 'cve_zona_contrato' }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "zoneContractCVE", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "cve_zona_vigilancia" }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "zoneVigilanceCVE", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "dif_hora" }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "diffHours", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "version" }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó un municipio' }),
    (0, typeorm_1.Column)("character varying", { name: "usuario_creacion", length: 100, nullable: false }),
    __metadata("design:type", String)
], DelegationEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación del municipio' }),
    (0, typeorm_1.Column)({ type: Date, name: "fecha_creacion" }),
    __metadata("design:type", Date)
], DelegationEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación de un municipio' }),
    (0, typeorm_1.Column)("character varying", { name: "usuario_modificacion", length: 100, nullable: false }),
    __metadata("design:type", String)
], DelegationEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación del municipio' }),
    (0, typeorm_1.Column)({ type: Date, name: "fecha_modificacion" }),
    __metadata("design:type", Date)
], DelegationEntity.prototype, "modificationDate", void 0);
DelegationEntity = __decorate([
    (0, typeorm_1.Entity)("cat_delegacion", { schema: "sera" })
], DelegationEntity);
exports.DelegationEntity = DelegationEntity;
//# sourceMappingURL=delegation.entity.js.map