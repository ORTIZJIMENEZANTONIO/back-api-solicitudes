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
exports.RequestEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let RequestEntity = class RequestEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de solicitud' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'integer',
        name: "id_solicitud"
    }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del expediente' }),
    (0, typeorm_1.Column)("numeric", { name: "id_expediente", nullable: true }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "idRecord", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2022-08-15 22:55:06' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_solicitud",
        nullable: true,
    }),
    __metadata("design:type", Date)
], RequestEntity.prototype, "applicationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2022-08-15 22:55:06' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_recepcion",
        nullable: true,
    }),
    __metadata("design:type", Date)
], RequestEntity.prototype, "receptionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre del titular' }),
    (0, typeorm_1.Column)("character varying", {
        name: "nombre_titular",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "nameOfOwner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cargo del titular' }),
    (0, typeorm_1.Column)("character varying", {
        name: "cargo_titular",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "holderCharge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5544337788' }),
    (0, typeorm_1.Column)("character varying", {
        name: "telefono_titular",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "phoneOfOwner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Email del titular' }),
    (0, typeorm_1.Column)("character varying", {
        name: "email_titular",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "emailOfOwner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '624' }),
    (0, typeorm_1.Column)("numeric", { name: "id_transferente", nullable: true }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "idTransference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, typeorm_1.Column)("numeric", { name: "id_emisora", nullable: true }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "idStation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, typeorm_1.Column)("numeric", { name: "id_autoridad", nullable: true }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "idAuthority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, typeorm_1.Column)("numeric", { name: "id_delegacion_regional", nullable: true }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "idRegionalDelegation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Remitente' }),
    (0, typeorm_1.Column)("character varying", {
        name: "remitente",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "sender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Observaciones' }),
    (0, typeorm_1.Column)("character varying", {
        name: "observaciones",
        nullable: true,
        length: 1500,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "observations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario destino' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_destino",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "targetUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character", { name: "prioridad_urgente", nullable: true, length: 1 }),
    __metadata("design:type", String)
], RequestEntity.prototype, "urgentPriority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "contribuyente_indiciado",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "indicatedTaxpayer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ARA470120057' }),
    (0, typeorm_1.Column)("character varying", {
        name: "expediente_transferente",
        nullable: true,
        length: 1250,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "transferenceFile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "notas_ent_transferente",
        nullable: true,
        length: 1500,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "transferEntNotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25351' }),
    (0, typeorm_1.Column)("numeric", { name: "id_direccion", nullable: true }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "idAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2' }),
    (0, typeorm_1.Column)("numeric", { name: "procedencia_info", nullable: true }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "originInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'acta_circunstanciada' }),
    (0, typeorm_1.Column)("character varying", {
        name: "acta_circunstanciada",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "circumstantialRecord", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'averiguacion_previa' }),
    (0, typeorm_1.Column)("character varying", {
        name: "averiguacion_previa",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "previousInquiry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "causa_penal",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "lawsuit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "no_amparo",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "noProtect", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "toca_penal",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "tocaPenal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '800-25-00-01-03-2019-31999' }),
    (0, typeorm_1.Column)("character varying", {
        name: "no_oficio",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "noPaper", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2019-07-31T05:00:00.000Z' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_oficio",
        nullable: true,
    }),
    __metadata("design:type", Date)
], RequestEntity.prototype, "paperDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "indiciado",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "indicated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "ministerio_publico",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "publicMinistry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", { name: "juzgado", nullable: true, length: 100 }),
    __metadata("design:type", String)
], RequestEntity.prototype, "court", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", { name: "delito", nullable: true, length: 100 }),
    __metadata("design:type", String)
], RequestEntity.prototype, "crime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ELECTRONICA' }),
    (0, typeorm_1.Column)("character varying", {
        name: "via_recepcion",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "receiptRoute", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "gestion_destino",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "destinationManagement", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '39' }),
    (0, typeorm_1.Column)("numeric", { name: "asunto", nullable: true }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "affair", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '800-25-00-01-03-2019' }),
    (0, typeorm_1.Column)("character varying", {
        name: "sat_determinante",
        nullable: true,
        length: 60,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "satDeterminant", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "sat_directorio",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "satDirectory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "sat_coordinador_zona",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "satZoneCoordinator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pepv860106v49' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_creacion",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "userCreated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2019-08-02T05:00:00.000Z" }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_creacion",
        nullable: true,
    }),
    __metadata("design:type", Date)
], RequestEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "amercado" }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "userModification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2019-08-22T05:00:00.000Z" }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_modificacion",
        nullable: true,
    }),
    __metadata("design:type", Date)
], RequestEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "SAT_SAE" }),
    (0, typeorm_1.Column)("character varying", {
        name: "tipo_transferencia",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "typeOfTransfer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "extincion_dominio",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "domainExtinction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '11' }),
    (0, typeorm_1.Column)("numeric", { name: "version", nullable: true }),
    __metadata("design:type", String)
], RequestEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'TE' }),
    (0, typeorm_1.Column)("character varying", {
        name: "tipo_usuario_destino",
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "targetUserType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "tipo_juicio",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "trialType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "PAMA" }),
    (0, typeorm_1.Column)("character varying", {
        name: "tipo_expediente",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "typeRecord", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "PAMA" }),
    (0, typeorm_1.Column)("character varying", {
        name: "estatus_solicitud",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "requestStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "CREACION" }),
    (0, typeorm_1.Column)("character varying", {
        name: "tipo_liga_expediente",
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "fileLeagueType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2019-08-16T05:00:00.000Z" }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_liga_expediente",
        nullable: true,
    }),
    __metadata("design:type", Date)
], RequestEntity.prototype, "fileLeagueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "comentario_rechazo",
        nullable: true,
        length: 2000,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "rejectionComment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "autoridad_ordenante",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "authorityOrdering", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "instance_bpm",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "instanceBpm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", { name: "juicio", nullable: true, length: 200 }),
    __metadata("design:type", String)
], RequestEntity.prototype, "trial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "tipo_resarcimiento",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "compensationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("numeric", { name: "id_solicitud_bienes", nullable: true }),
    __metadata("design:type", String)
], RequestEntity.prototype, "idStateRequest", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("numeric", { name: "busqueda_siab", nullable: true }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "searchSiab", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_prioridad",
        nullable: true,
    }),
    __metadata("design:type", Date)
], RequestEntity.prototype, "priorityDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    (0, typeorm_1.Column)("numeric", { name: "num_rechazos", nullable: true }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "numberOfRejections", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "SAE503126" }),
    (0, typeorm_1.Column)("character varying", {
        name: "id_doc_dictamen",
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "idRulingDocument", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "DCCR/DECRE/DRM/ATARM/1470/2019" }),
    (0, typeorm_1.Column)("character varying", {
        name: "folio_reporte",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "reportSheet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "nombre_destinatario_dictamen",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "nameRecipientRuling", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "DELEGACIÓN REGIONAL METROPOLITANA" }),
    (0, typeorm_1.Column)("character varying", {
        name: "cargo_destinatario_dictamen",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "postRecipientRuling", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "parrafo1_dictamen" }),
    (0, typeorm_1.Column)("character varying", {
        name: "parrafo1_dictamen",
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "paragraphOneRuling", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "parrafo2_dictamen" }),
    (0, typeorm_1.Column)("character varying", {
        name: "parrafo2_dictamen",
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "paragraphTwoRuling", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "ANIBAL MERCADO MARTINEZ" }),
    (0, typeorm_1.Column)("character varying", {
        name: "nombre_firmante_dictamen",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "nameSignatoryRuling", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "ADMINISTRADOR TITULAR DE ADMINISTRACION Y RECUPERACION METROPOLITANA" }),
    (0, typeorm_1.Column)("character varying", {
        name: "cargo_firmante_dictamen",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "postSignatoryRuling", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "ccp_dictamen",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "ccpRuling", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "EMILIO RODRIGUEZ ESPINO" }),
    (0, typeorm_1.Column)("character varying", {
        name: "nombre_creador_dictamen",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "rulingCreatorName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1470 }),
    (0, typeorm_1.Column)("numeric", { name: "no_folio_dictamen", nullable: true }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "rulingSheetNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "coordregsae",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "registrationCoordinatorSae", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    (0, typeorm_1.Column)("character varying", {
        name: "email_notificacion",
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], RequestEntity.prototype, "emailNotification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9 }),
    (0, typeorm_1.Column)("numeric", { name: "cve_estado", nullable: true }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "keyStateOfRepublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1128877 }),
    (0, typeorm_1.Column)("numeric", { name: "instance_bpel", nullable: true }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "instanceBpel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2019-08-16T05:00:00.000Z" }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_verificacion_cump",
        nullable: true,
    }),
    __metadata("design:type", Date)
], RequestEntity.prototype, "verificationDateCump", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12210 }),
    (0, typeorm_1.Column)("numeric", { name: "id_expediente_tmp", nullable: true }),
    __metadata("design:type", String)
], RequestEntity.prototype, "idRecordTmp", void 0);
RequestEntity = __decorate([
    (0, typeorm_1.Entity)("solicitudes", { schema: "sera" })
], RequestEntity);
exports.RequestEntity = RequestEntity;
//# sourceMappingURL=request.entity.js.map