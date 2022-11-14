import { ApiProperty } from "@nestjs/swagger";

export class RequestDto {

  @ApiProperty({ example: 'Identificador de solicitud' })
  id: number;

  @ApiProperty({ example: 'Identificador del expediente' })
  idRecord: number | null;

  @ApiProperty({ example: '2022-08-15 22:55:06' })
  applicationDate: Date | null;

  @ApiProperty({ example: '2022-08-15 22:55:06' })
  receptionDate: Date | null;

  @ApiProperty({ example: 'Nombre del titular' })
  nameOfOwner: string | null;

  @ApiProperty({ example: 'Cargo del titular' })
  holderCharge: string | null;

  @ApiProperty({ example: '5544337788' })
  phoneOfOwner: string | null;

  @ApiProperty({ example: 'Email del titular' })
  emailOfOwner: string | null;

  @ApiProperty({ example: '624' })
  idTransference: number | null;

  @ApiProperty({ example: '1' })
  idStation: number | null;

  @ApiProperty({ example: '1' })
  idAuthority: number | null;

  @ApiProperty({ example: '1' })
  idRegionalDelegation: number | null;

  @ApiProperty({ example: 'Remitente' })
  sender: string | null;

  @ApiProperty({ example: 'Observaciones' })
  observations: string | null;

  @ApiProperty({ example: 'Usuario destino' })
  targetUser: string | null;

  @ApiProperty({ example: null })
  urgentPriority: string | null;

  @ApiProperty({ example: null })
  indicatedTaxpayer: string | null;

  @ApiProperty({ example: 'Expediente transferente: ARA470120057' })
  transferenceFile: string | null;

  @ApiProperty({ example: null })
  transferEntNotes: string | null;

  @ApiProperty({ example: '25351' })
  idAddress: number | null;

  @ApiProperty({ example: '2' })
  originInfo: number | null;

  @ApiProperty({ example: 'acta_circunstanciada' })
  circumstantialRecord: string | null;

  @ApiProperty({ example: 'averiguacion_previa' })
  previousInquiry: string | null;

  @ApiProperty({ example: null })
  lawsuit: string | null;

  @ApiProperty({ example: null })
  noProtect: string | null;

  @ApiProperty({ example: null })
  tocaPenal: string | null;

  @ApiProperty({ example: '800-25-00-01-03-2019-31999' })
  noPaper: string | null;

  @ApiProperty({ example: '2019-07-31T05:00:00.000Z' })
  paperDate: Date | null;

  @ApiProperty({ example: null })
  indicated: string | null;

  @ApiProperty({ example: null })
  publicMinistry: string | null;

  @ApiProperty({ example: null })
  court: string | null;

  @ApiProperty({ example: null })
  crime: string | null;

  @ApiProperty({ example: 'ELECTRONICA' })
  receiptRoute: string | null;

  @ApiProperty({ example: null })
  destinationManagement: string | null;

  @ApiProperty({ example: '39' })
  affair: number | null;

  @ApiProperty({ example: '800-25-00-01-03-2019' })
  satDeterminant: string | null;

  @ApiProperty({ example: null })
  satDirectory: string | null;

  @ApiProperty({ example: null })
  satZoneCoordinator: string | null;

  @ApiProperty({ example: 'pepv860106v49' })
  userCreated: string | null;

  @ApiProperty({ example: "2019-08-02T05:00:00.000Z" })
  creationDate: Date | null;

  @ApiProperty({ example: "amercado" })
  userModification: string | null;

  @ApiProperty({ example: "2019-08-22T05:00:00.000Z" })
  modificationDate: Date | null;

  @ApiProperty({ example: "SAT_SAE" })
  typeOfTransfer: string | null;

  @ApiProperty({ example: null })
  domainExtinction: string | null;

  @ApiProperty({ example: '11' })
  version: string | null;

  @ApiProperty({ example: 'TE' })
  targetUserType: string | null;

  @ApiProperty({ example: null })
  trialType: string | null;

  @ApiProperty({ example: "PAMA" })
  typeRecord: string | null;

  @ApiProperty({ example: "PAMA" })
  requestStatus: string | null;

  @ApiProperty({ example: "CREACION" })
  fileLeagueType: string | null;

  @ApiProperty({ example: "2019-08-16T05:00:00.000Z" })
  fileLeagueDate: Date | null;

  @ApiProperty({ example: null })
  rejectionComment: string | null;

  @ApiProperty({ example: null })
  authorityOrdering: string | null;

  @ApiProperty({ example: null })
  instanceBpm: string | null;

  @ApiProperty({ example: null })
  trial: string | null;

  @ApiProperty({ example: null })
  compensationType: string | null;

  @ApiProperty({ example: null })
  idStateRequest: string | null;

  @ApiProperty({ example: null })
  searchSiab: number | null;

  @ApiProperty({ example: null })
  priorityDate: Date | null;

  @ApiProperty({ example: 0 })
  numberOfRejections: number | null;

  @ApiProperty({ example: "SAE503126" })
  idRulingDocument: string | null;

  @ApiProperty({ example: "DCCR/DECRE/DRM/ATARM/1470/2019" })
  reportSheet: string | null;

  @ApiProperty({ example: null })
  nameRecipientRuling: string | null;

  @ApiProperty({ example: "DELEGACIÓN REGIONAL METROPOLITANA" })
  postRecipientRuling: string | null;

  @ApiProperty({ example: "parrafo1_dictamen" })
  paragraphOneRuling: string | null;

  @ApiProperty({ example: "parrafo2_dictamen" })
  paragraphTwoRuling: string | null;

  @ApiProperty({ example: "ANIBAL MERCADO MARTINEZ" })
  nameSignatoryRuling: string | null;

  @ApiProperty({ example: "ADMINISTRADOR TITULAR DE ADMINISTRACION Y RECUPERACION METROPOLITANA" })
  postSignatoryRuling: string | null;

  @ApiProperty({ example: null })
  ccpRuling: string | null;

  @ApiProperty({ example: "EMILIO RODRIGUEZ ESPINO" })
  rulingCreatorName: string | null;

  @ApiProperty({ example: 1470 })
  rulingSheetNumber: number | null;

  @ApiProperty({ example: null })
  registrationCoordinatorSae: string | null;

  @ApiProperty({ example: null })
  emailNotification: string | null;

  @ApiProperty({ example: 9 })
  keyStateOfRepublic: number | null;

  @ApiProperty({ example: 1128877 })
  instanceBpel: number | null;

  @ApiProperty({ example: "2019-08-16T05:00:00.000Z" })
  verificationDateCump: Date | null;

  @ApiProperty({ example: 12210 })
  idRecordTmp: string | null;
  /*
  @ApiProperty({ example: 12210 })
  @Column("character", { name: "trial444", nullable: true, length: 1 })
  trial444: string | null;
  */

}