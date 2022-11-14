"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationByPropertyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const evaluation_by_property_service_1 = require("./evaluation-by-property.service");
const evaluation_by_property_controller_1 = require("./evaluation-by-property.controller");
const evaluation_by_property_entity_1 = require("./entities/evaluation-by-property.entity");
let EvaluationByPropertyModule = class EvaluationByPropertyModule {
};
EvaluationByPropertyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([evaluation_by_property_entity_1.EvaluationByPropertyEntity])
        ],
        providers: [evaluation_by_property_service_1.EvaluationByPropertyService],
        controllers: [evaluation_by_property_controller_1.EvaluationByPropertyController]
    })
], EvaluationByPropertyModule);
exports.EvaluationByPropertyModule = EvaluationByPropertyModule;
//# sourceMappingURL=evaluation-by-property.module.js.map