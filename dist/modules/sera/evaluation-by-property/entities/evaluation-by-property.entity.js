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
exports.EvaluationByPropertyEntity = void 0;
const typeorm_1 = require("typeorm");
let EvaluationByPropertyEntity = class EvaluationByPropertyEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        name: 'no_expediente',
        type: 'numeric',
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", String)
], EvaluationByPropertyEntity.prototype, "recordNum", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        name: 'no_bien',
        type: 'numeric',
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], EvaluationByPropertyEntity.prototype, "propertyNum", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        name: 'tipo_dictaminacion',
        type: 'character varying',
        length: 15,
    }),
    __metadata("design:type", String)
], EvaluationByPropertyEntity.prototype, "evaluationType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estatus_dictaminacion',
        type: 'character varying',
        length: 15,
    }),
    __metadata("design:type", String)
], EvaluationByPropertyEntity.prototype, "statusw", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fec_dictaminacion',
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], EvaluationByPropertyEntity.prototype, "evaluationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'usuario_dictamina',
        type: 'character varying',
        length: 30,
    }),
    __metadata("design:type", String)
], EvaluationByPropertyEntity.prototype, "evaluatorUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'autoridad_ordena_dictamen',
        type: 'character varying',
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], EvaluationByPropertyEntity.prototype, "autorithyOrderingEvaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'observaciones',
        type: 'character varying',
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], EvaluationByPropertyEntity.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'no_registro',
        type: 'numeric',
        nullable: true,
    }),
    __metadata("design:type", Number)
], EvaluationByPropertyEntity.prototype, "registryNum", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'no_delegacion_dictam',
        type: 'numeric',
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], EvaluationByPropertyEntity.prototype, "evaluatingDelegationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'area_dictamina',
        type: 'numeric',
        nullable: true,
        precision: 3,
        scale: 0,
    }),
    __metadata("design:type", Number)
], EvaluationByPropertyEntity.prototype, "evaluatingArea", void 0);
EvaluationByPropertyEntity = __decorate([
    (0, typeorm_1.Entity)('dictaminacion_x_bien', { schema: 'sera' })
], EvaluationByPropertyEntity);
exports.EvaluationByPropertyEntity = EvaluationByPropertyEntity;
//# sourceMappingURL=evaluation-by-property.entity.js.map