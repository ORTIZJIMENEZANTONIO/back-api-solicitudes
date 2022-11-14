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
exports.EvaluationEntity = void 0;
const typeorm_1 = require("typeorm");
let EvaluationEntity = class EvaluationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        name: 'no_of_dicta',
        type: 'numeric',
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], EvaluationEntity.prototype, "evaluationNum", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        name: 'tipo_dictaminacion',
        type: 'character varying',
        length: 15,
    }),
    __metadata("design:type", String)
], EvaluationEntity.prototype, "evaluationType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'no_expediente',
        type: 'numeric',
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], EvaluationEntity.prototype, "recordNum", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'clave_oficio_armada',
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], EvaluationEntity.prototype, "keyDocumentArmada", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estatus_dictaminacion',
        type: 'character varying',
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], EvaluationEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fec_dictaminacion',
        type: 'date',
        nullable: true,
    }),
    __metadata("design:type", Date)
], EvaluationEntity.prototype, "evaluationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'usuario_dictamina',
        type: 'character varying',
        length: 30,
    }),
    __metadata("design:type", String)
], EvaluationEntity.prototype, "evaluatorUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'observaciones',
        type: 'character varying',
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], EvaluationEntity.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'no_delegacion_dictam',
        type: 'numeric',
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], EvaluationEntity.prototype, "evaluatingDelegationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'area_dictamina',
        type: 'numeric',
        nullable: true,
        precision: 3,
        scale: 0,
    }),
    __metadata("design:type", Number)
], EvaluationEntity.prototype, "evaluatingArea", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_instructora',
        type: 'date',
        nullable: true,
    }),
    __metadata("design:type", Date)
], EvaluationEntity.prototype, "instructorDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'no_registro',
        type: 'numeric',
        nullable: true,
    }),
    __metadata("design:type", Number)
], EvaluationEntity.prototype, "registryNum", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'es_delit',
        type: 'character varying',
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], EvaluationEntity.prototype, "isDelit", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'no_volante',
        type: 'numeric',
        nullable: true,
        precision: 20,
        scale: 0,
    }),
    __metadata("design:type", Number)
], EvaluationEntity.prototype, "flyerNum", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'num_clave_armada',
        type: 'numeric',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], EvaluationEntity.prototype, "arrmadaKeyNum", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fec_notifica_aseguramiento',
        type: 'date',
        nullable: true,
    }),
    __metadata("design:type", Date)
], EvaluationEntity.prototype, "insuranceNoticeDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fec_resolucion',
        type: 'date',
        nullable: true,
    }),
    __metadata("design:type", Date)
], EvaluationEntity.prototype, "resolutionDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fec_notificaresolucion',
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], EvaluationEntity.prototype, "resolutionNoticeDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'folio_universal',
        type: 'numeric',
        nullable: true,
        precision: 15,
        scale: 0,
    }),
    __metadata("design:type", Number)
], EvaluationEntity.prototype, "folioUniversal", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fec_ingreso',
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], EvaluationEntity.prototype, "admissionDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fec_dictaminacion_hc',
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], EvaluationEntity.prototype, "evaluationHcDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fec_ingreso_hc',
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], EvaluationEntity.prototype, "admissionHcDate", void 0);
EvaluationEntity = __decorate([
    (0, typeorm_1.Entity)('dictaminaciones', { schema: 'sera' })
], EvaluationEntity);
exports.EvaluationEntity = EvaluationEntity;
//# sourceMappingURL=evalutaion.entity.js.map