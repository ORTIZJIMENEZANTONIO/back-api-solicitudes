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
exports.DomicileEntity = void 0;
const typeorm_1 = require("typeorm");
let DomicileEntity = class DomicileEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("double precision", {
        primary: true,
        name: "id_domicilio",
        precision: 53,
    }),
    __metadata("design:type", Number)
], DomicileEntity.prototype, "idDomicile", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "cve_estado",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], DomicileEntity.prototype, "cveEstado", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cve_municipio",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "cveMunicipio", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cve_localidad",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "cveLocalidad", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "num_exterior",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "numExterior", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "num_interior",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "numInterior", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "codigo", nullable: true, length: 6 }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cve_via_ref1",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "cveViaRef1", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cve_via_ref2",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "cveViaRef2", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cve_via_ref3",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "cveViaRef3", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "descripcion",
        nullable: true,
        length: 2000,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "latitud", nullable: true, length: 30 }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "latitud", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "longitud", nullable: true, length: 30 }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "longitud", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "via_nombre",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "viaNombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "via_origen",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "viaOrigen", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "via_destino",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "viaDestino", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "via_cadenamiento",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "viaCadenamiento", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_creacion",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "usuarioCreacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_creacion",
        nullable: true,
    }),
    __metadata("design:type", Date)
], DomicileEntity.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "usuarioModificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_modificacion",
        nullable: true,
    }),
    __metadata("design:type", Date)
], DomicileEntity.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cve_asentamiento",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], DomicileEntity.prototype, "cveAsentamiento", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "version",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], DomicileEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "id_solicitud",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], DomicileEntity.prototype, "idSolicitud", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "id_delegacion_regional",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], DomicileEntity.prototype, "idDelegacionRegional", void 0);
DomicileEntity = __decorate([
    (0, typeorm_1.Entity)("domicilios", { schema: "sae_nsbdb" })
], DomicileEntity);
exports.DomicileEntity = DomicileEntity;
//# sourceMappingURL=domicile.entity.js.map