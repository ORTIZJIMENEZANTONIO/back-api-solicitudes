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
exports.StateOfRepublicEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let StateOfRepublicEntity = class StateOfRepublicEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del estado' }),
    (0, typeorm_1.PrimaryColumn)("character varying", { name: "cve_estado", length: 15, nullable: false }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "cveState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'DESC_ESTADO' }),
    (0, typeorm_1.Column)("character varying", { name: "desc_estado", length: 200 }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "descState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CODE_ESTADO' }),
    (0, typeorm_1.Column)("character varying", { name: "code_estado", length: 30 }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "codeState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro' }),
    (0, typeorm_1.Column)({ type: "numeric", name: "no_registro", width: 5 }),
    __metadata("design:type", Number)
], StateOfRepublicEntity.prototype, "noRegister", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NMTABLA' }),
    (0, typeorm_1.Column)({ type: "numeric", name: "nmtabla", width: 5 }),
    __metadata("design:type", Number)
], StateOfRepublicEntity.prototype, "nameTable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Abreviatura' }),
    (0, typeorm_1.Column)("character varying", { name: "abreviatura", length: 3 }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "abbreviation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Riesgo' }),
    (0, typeorm_1.Column)("character varying", { name: "riesgo", length: 2 }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "risk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Versión' }),
    (0, typeorm_1.Column)({ type: "numeric", name: "version" }),
    __metadata("design:type", Number)
], StateOfRepublicEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Zona horaria del estado' }),
    (0, typeorm_1.Column)("character varying", { name: "zona_horaria_std", length: 20 }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "timeZonaStd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Versión de la zona horaria del estado' }),
    (0, typeorm_1.Column)("character varying", { name: "zona_horaria_ver", length: 20 }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "timeZonaView", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el estado' }),
    (0, typeorm_1.Column)("character varying", { name: "usuario_creacion", length: 100, nullable: true }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación del estado - Nota:el orm lo establece automáticamente' }),
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación del estado' }),
    (0, typeorm_1.Column)("character varying", { name: "usuario_modificacion", length: 100, nullable: true }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación del estado - Nota:el orm lo establece automáticamente' }),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], StateOfRepublicEntity.prototype, "fecha_modificacion", void 0);
StateOfRepublicEntity = __decorate([
    (0, typeorm_1.Entity)("cat_estado", { schema: "sera" })
], StateOfRepublicEntity);
exports.StateOfRepublicEntity = StateOfRepublicEntity;
//# sourceMappingURL=state-of-republic.entity.js.map