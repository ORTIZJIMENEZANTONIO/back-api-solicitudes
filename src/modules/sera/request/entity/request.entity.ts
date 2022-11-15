import { ApiProperty } from "@nestjs/swagger";
import { 
  Column, 
  Entity, 
  PrimaryColumn, 
  PrimaryGeneratedColumn 
} from "typeorm";

@Entity("solicitudes", { schema: "sera" })
export class RequestEntity {
  @ApiProperty({ example: 'Identificador de solicitud' })
  @PrimaryGeneratedColumn ({ 
    type: 'integer',
    name: "id_solicitud" 
  })
  id?: number | null;

  @ApiProperty({ example: 'Identificador del expediente' })
  @Column("numeric", { name: "id_expediente", nullable: true })
  idRecord: number | null;

  @ApiProperty({ example: '2022-08-15 22:55:06' })
  @Column("timestamp without time zone", {
    name: "fecha_solicitud",
    nullable: true,
  })
  applicationDate: Date | null;

  @ApiProperty({ example: '2022-08-15 22:55:06' })
  @Column("timestamp without time zone", {
    name: "fecha_recepcion",
    nullable: true,
  })
  receptionDate: Date | null;

  @ApiProperty({ example: 'Nombre del titular' })
  @Column("character varying", {
    name: "nombre_titular",
    nullable: true,
    length: 100,
  })
  nameOfOwner: string | null;

  @ApiProperty({ example: 'Cargo del titular' })
  @Column("character varying", {
    name: "cargo_titular",
    nullable: true,
    length: 100,
  })
  holderCharge: string | null;

  @ApiProperty({ example: '5544337788' })
  @Column("character varying", {
    name: "telefono_titular",
    nullable: true,
    length: 30,
  })
  phoneOfOwner: string | null;

  @ApiProperty({ example: 'Email del titular' })
  @Column("character varying", {
    name: "email_titular",
    nullable: true,
    length: 100,
  })
  emailOfOwner: string | null;

  @ApiProperty({ example: '624' })
  @Column("numeric", { name: "id_transferente", nullable: true })
  idTransference: number | null;

  @ApiProperty({ example: '1' })
  @Column("numeric", { name: "id_emisora", nullable: true })
  idStation: number | null;

  @ApiProperty({ example: '1' })
  @Column("numeric", { name: "id_autoridad", nullable: true })
  idAuthority: number | null;

  @ApiProperty({ example: '1' })
  @Column("numeric", { name: "id_delegacion_regional", nullable: true })
  idRegionalDelegation: number | null;

  @ApiProperty({ example: 'Remitente' })
  @Column("character varying", {
    name: "remitente",
    nullable: true,
    length: 100,
  })
  sender: string | null;

  @ApiProperty({ example: 'Observaciones' })
  @Column("character varying", {
    name: "observaciones",
    nullable: true,
    length: 1500,
  })
  observations: string | null;

  @ApiProperty({ example: 'Usuario destino' })
  @Column("character varying", {
    name: "usuario_destino",
    nullable: true,
    length: 100,
  })
  targetUser: string | null;

  @ApiProperty({ example: null })
  @Column("character", { name: "prioridad_urgente", nullable: true, length: 1 })
  urgentPriority: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "contribuyente_indiciado",
    nullable: true,
    length: 200,
  })
  indicatedTaxpayer: string | null;

  @ApiProperty({ example: 'ARA470120057' })
  @Column("character varying", {
    name: "expediente_transferente",
    nullable: true,
    length: 1250,
  })
  transferenceFile: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "notas_ent_transferente",
    nullable: true,
    length: 1500,
  })
  transferEntNotes: string | null;

  @ApiProperty({ example: '25351' })
  @Column("numeric", { name: "id_direccion", nullable: true })
  idAddress: number | null;

  @ApiProperty({ example: '2' })
  @Column("numeric", { name: "procedencia_info", nullable: true })
  originInfo: number | null;

  @ApiProperty({ example: 'acta_circunstanciada' })
  @Column("character varying", {
    name: "acta_circunstanciada",
    nullable: true,
    length: 100,
  })
  circumstantialRecord: string | null;

  @ApiProperty({ example: 'averiguacion_previa' })
  @Column("character varying", {
    name: "averiguacion_previa",
    nullable: true,
    length: 100,
  })
  previousInquiry: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "causa_penal",
    nullable: true,
    length: 100,
  })
  lawsuit: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "no_amparo",
    nullable: true,
    length: 100,
  })
  noProtect: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "toca_penal",
    nullable: true,
    length: 100,
  })
  tocaPenal: string | null;

  @ApiProperty({ example: '800-25-00-01-03-2019-31999' })
  @Column("character varying", {
    name: "no_oficio",
    nullable: true,
    length: 100,
  })
  noPaper: string | null;

  @ApiProperty({ example: '2019-07-31T05:00:00.000Z' })
  @Column("timestamp without time zone", {
    name: "fecha_oficio",
    nullable: true,
  })
  paperDate: Date | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "indiciado",
    nullable: true,
    length: 100,
  })
  indicated: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "ministerio_publico",
    nullable: true,
    length: 100,
  })
  publicMinistry: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", { name: "juzgado", nullable: true, length: 100 })
  court: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", { name: "delito", nullable: true, length: 100 })
  crime: string | null;

  @ApiProperty({ example: 'ELECTRONICA' })
  @Column("character varying", {
    name: "via_recepcion",
    nullable: true,
    length: 30,
  })
  receiptRoute: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "gestion_destino",
    nullable: true,
    length: 100,
  })
  destinationManagement: string | null;

  @ApiProperty({ example: '39' })
  @Column("numeric", { name: "asunto", nullable: true })
  affair: number | null;

  @ApiProperty({ example: '800-25-00-01-03-2019' })
  @Column("character varying", {
    name: "sat_determinante",
    nullable: true,
    length: 60,
  })
  satDeterminant: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "sat_directorio",
    nullable: true,
    length: 200,
  })
  satDirectory: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "sat_coordinador_zona",
    nullable: true,
    length: 100,
  })
  satZoneCoordinator: string | null;

  @ApiProperty({ example: 'pepv860106v49' })
  @Column("character varying", {
    name: "usuario_creacion",
    nullable: true,
    length: 100,
  })
  userCreated: string | null;

  @ApiProperty({ example: "2019-08-02T05:00:00.000Z" })
  @Column("timestamp without time zone", {
    name: "fecha_creacion",
    nullable: true,
  })
  creationDate: Date | null;

  @ApiProperty({ example: "amercado" })
  @Column("character varying", {
    name: "usuario_modificacion",
    nullable: true,
    length: 100,
  })
  userModification: string | null;

  @ApiProperty({ example: "2019-08-22T05:00:00.000Z" })
  @Column("timestamp without time zone", {
    name: "fecha_modificacion",
    nullable: true,
  })
  modificationDate: Date | null;

  @ApiProperty({ example: "SAT_SAE" })
  @Column("character varying", {
    name: "tipo_transferencia",
    nullable: true,
    length: 30,
  })
  typeOfTransfer: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "extincion_dominio",
    nullable: true,
    length: 100,
  })
  domainExtinction: string | null;

  @ApiProperty({ example: '11' })
  @Column("numeric", { name: "version", nullable: true })
  version: string | null;

  @ApiProperty({ example: 'TE' })
  @Column("character varying", {
    name: "tipo_usuario_destino",
    nullable: true,
    length: 20,
  })
  targetUserType: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "tipo_juicio",
    nullable: true,
    length: 100,
  })
  trialType: string | null;

  @ApiProperty({ example: "PAMA" })
  @Column("character varying", {
    name: "tipo_expediente",
    nullable: true,
    length: 50,
  })
  typeRecord: string | null;

  @ApiProperty({ example: "PAMA" })
  @Column("character varying", {
    name: "estatus_solicitud",
    nullable: true,
    length: 30,
  })
  requestStatus: string | null;

  @ApiProperty({ example: "CREACION" })
  @Column("character varying", {
    name: "tipo_liga_expediente",
    nullable: true,
    length: 20,
  })
  fileLeagueType: string | null;

  @ApiProperty({ example: "2019-08-16T05:00:00.000Z" })
  @Column("timestamp without time zone", {
    name: "fecha_liga_expediente",
    nullable: true,
  })
  fileLeagueDate: Date | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "comentario_rechazo",
    nullable: true,
    length: 2000,
  })
  rejectionComment: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "autoridad_ordenante",
    nullable: true,
    length: 100,
  })
  authorityOrdering: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "instance_bpm",
    nullable: true,
    length: 30,
  })
  instanceBpm: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", { name: "juicio", nullable: true, length: 200 })
  trial: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "tipo_resarcimiento",
    nullable: true,
    length: 30,
  })
  compensationType: string | null;

  @ApiProperty({ example: null })
  @Column("numeric", { name: "id_solicitud_bienes", nullable: true })
  idStateRequest: string | null;

  @ApiProperty({ example: null })
  @Column("numeric", { name: "busqueda_siab", nullable: true })
  searchSiab: number | null;

  @ApiProperty({ example: null })
  @Column("timestamp without time zone", {
    name: "fecha_prioridad",
    nullable: true,
  })
  priorityDate: Date | null;

  @ApiProperty({ example: 0 })
  @Column("numeric", { name: "num_rechazos", nullable: true })
  numberOfRejections: number | null;

  @ApiProperty({ example: "SAE503126" })
  @Column("character varying", {
    name: "id_doc_dictamen",
    nullable: true,
    length: 20,
  })
  idRulingDocument: string | null;

  @ApiProperty({ example: "DCCR/DECRE/DRM/ATARM/1470/2019" })
  @Column("character varying", {
    name: "folio_reporte",
    nullable: true,
    length: 50,
  })
  reportSheet: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "nombre_destinatario_dictamen",
    nullable: true,
    length: 100,
  })
  nameRecipientRuling: string | null;

  @ApiProperty({ example: "DELEGACIÓN REGIONAL METROPOLITANA" })
  @Column("character varying", {
    name: "cargo_destinatario_dictamen",
    nullable: true,
    length: 100,
  })
  postRecipientRuling: string | null;

  @ApiProperty({ example: "parrafo1_dictamen" })
  @Column("character varying", {
    name: "parrafo1_dictamen",
    nullable: true,
    length: 4000,
  })
  paragraphOneRuling: string | null;

  @ApiProperty({ example: "parrafo2_dictamen" })
  @Column("character varying", {
    name: "parrafo2_dictamen",
    nullable: true,
    length: 4000,
  })
  paragraphTwoRuling: string | null;

  @ApiProperty({ example: "ANIBAL MERCADO MARTINEZ" })
  @Column("character varying", {
    name: "nombre_firmante_dictamen",
    nullable: true,
    length: 100,
  })
  nameSignatoryRuling: string | null;

  @ApiProperty({ example: "ADMINISTRADOR TITULAR DE ADMINISTRACION Y RECUPERACION METROPOLITANA" })
  @Column("character varying", {
    name: "cargo_firmante_dictamen",
    nullable: true,
    length: 100,
  })
  postSignatoryRuling: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "ccp_dictamen",
    nullable: true,
    length: 200,
  })
  ccpRuling: string | null;

  @ApiProperty({ example: "EMILIO RODRIGUEZ ESPINO" })
  @Column("character varying", {
    name: "nombre_creador_dictamen",
    nullable: true,
    length: 100,
  })
  rulingCreatorName: string | null;

  @ApiProperty({ example: 1470 })
  @Column("numeric", { name: "no_folio_dictamen", nullable: true })
  rulingSheetNumber: number | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "coordregsae",
    nullable: true,
    length: 50,
  })
  registrationCoordinatorSae: string | null;

  @ApiProperty({ example: null })
  @Column("character varying", {
    name: "email_notificacion",
    nullable: true,
    length: 1000,
  })
  emailNotification: string | null;

  @ApiProperty({ example: 9 })
  @Column("numeric", { name: "cve_estado", nullable: true })
  keyStateOfRepublic: number | null;

  @ApiProperty({ example: 1128877 })
  @Column("numeric", { name: "instance_bpel", nullable: true })
  instanceBpel: number | null;

  @ApiProperty({ example: "2019-08-16T05:00:00.000Z" })
  @Column("timestamp without time zone", {
    name: "fecha_verificacion_cump",
    nullable: true,
  })
  verificationDateCump: Date | null;

  @ApiProperty({ example: 12210 })
  @Column("numeric", { name: "id_expediente_tmp", nullable: true })
  idRecordTmp: string | null;
  /*
  @ApiProperty({ example: 12210 })
  @Column("character", { name: "trial444", nullable: true, length: 1 })
  trial444: string | null;
  */
}
