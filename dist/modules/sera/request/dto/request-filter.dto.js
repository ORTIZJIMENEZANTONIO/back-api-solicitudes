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
exports.RequestFilterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RequestFilterDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Number)
], RequestFilterDto.prototype, "idRequest", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Date)
], RequestFilterDto.prototype, "requestDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", String)
], RequestFilterDto.prototype, "nameOfOwner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", String)
], RequestFilterDto.prototype, "holderCharge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", String)
], RequestFilterDto.prototype, "noPaper", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Date)
], RequestFilterDto.prototype, "paperDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], RequestFilterDto.prototype, "idRegionalDelegation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Number)
], RequestFilterDto.prototype, "keyStateOfRepublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Number)
], RequestFilterDto.prototype, "idTransference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Number)
], RequestFilterDto.prototype, "idStation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Number)
], RequestFilterDto.prototype, "idAuthority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", String)
], RequestFilterDto.prototype, "transferenceFile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", String)
], RequestFilterDto.prototype, "receiptRoute", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Number)
], RequestFilterDto.prototype, "affair", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", String)
], RequestFilterDto.prototype, "typeOfTransfer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "PAMA" }),
    __metadata("design:type", String)
], RequestFilterDto.prototype, "requestStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", String)
], RequestFilterDto.prototype, "indicatedTaxpayer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", String)
], RequestFilterDto.prototype, "circumstantialRecord", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", String)
], RequestFilterDto.prototype, "previousInquiry", void 0);
exports.RequestFilterDto = RequestFilterDto;
//# sourceMappingURL=request-filter.dto.js.map