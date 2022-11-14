"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdtLinesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const updt_lines_service_1 = require("./updt-lines.service");
const updt_lines_controller_1 = require("./updt-lines.controller");
const warehouse_entity_1 = require("../warehouse/entities/warehouse.entity");
let UpdtLinesModule = class UpdtLinesModule {
};
UpdtLinesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([warehouse_entity_1.WarehouseEntity])],
        providers: [updt_lines_service_1.UpdtLinesService],
        controllers: [updt_lines_controller_1.UpdtLinesController]
    })
], UpdtLinesModule);
exports.UpdtLinesModule = UpdtLinesModule;
//# sourceMappingURL=updt-lines.module.js.map