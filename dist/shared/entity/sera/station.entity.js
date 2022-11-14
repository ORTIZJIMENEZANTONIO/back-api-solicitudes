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
exports.StationEntity = void 0;
const typeorm_1 = require("typeorm");
let StationEntity = class StationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int4", name: "no_emisora" }),
    __metadata("design:type", Number)
], StationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "no_transferente" }),
    __metadata("design:type", Number)
], StationEntity.prototype, "numStation", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "desc_emisora", length: 255 }),
    __metadata("design:type", String)
], StationEntity.prototype, "descStation", void 0);
StationEntity = __decorate([
    (0, typeorm_1.Entity)("cat_emisora", { schema: "sera" })
], StationEntity);
exports.StationEntity = StationEntity;
//# sourceMappingURL=station.entity.js.map