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
exports.TransferentEntity = void 0;
const typeorm_1 = require("typeorm");
let TransferentEntity = class TransferentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "no_transferente" }),
    __metadata("design:type", Number)
], TransferentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "desc_transferente", length: 100 }),
    __metadata("design:type", String)
], TransferentEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "clave", length: 100 }),
    __metadata("design:type", String)
], TransferentEntity.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "cvman" }),
    __metadata("design:type", Number)
], TransferentEntity.prototype, "cvman", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "indcap", length: 100 }),
    __metadata("design:type", String)
], TransferentEntity.prototype, "indcap", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "porc_comi", length: 100 }),
    __metadata("design:type", String)
], TransferentEntity.prototype, "porc_comi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "activo" }),
    __metadata("design:type", Number)
], TransferentEntity.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "riesgo", length: 2 }),
    __metadata("design:type", String)
], TransferentEntity.prototype, "risk", void 0);
TransferentEntity = __decorate([
    (0, typeorm_1.Entity)("cat_transferente", { schema: "sera" })
], TransferentEntity);
exports.TransferentEntity = TransferentEntity;
//# sourceMappingURL=transferent.entity.js.map