import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from "class-validator";

import { Message } from "src/shared/validation-messages/message";

export class RequestDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 1 })
  @ApiProperty({ example: "Identificador de solicitud", required: false })
  id?: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "Identificador del expediente", required: false })
  idRecord: number | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2022-08-15 22:55:06", required: false })
  applicationDate: Date | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2022-08-15 22:55:06", required: false })
  receptionDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Nombre del titular", required: false })
  nameOfOwner: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Cargo del titular", required: false })
  holderCharge: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 30, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "5544337788", required: false })
  phoneOfOwner: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Email del titular", required: false })
  emailOfOwner: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "624", required: false })
  idTransference: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "1", required: false })
  idStation: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "1", required: false })
  idAuthority: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "1", required: false })
  idRegionalDelegation: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Remitente", required: false })
  sender: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 1500, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Observaciones", required: false })
  observations: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Usuario destino", required: false })
  targetUser: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 1, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  urgentPriority: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 200, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  indicatedTaxpayer: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 1250, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({
    example: "Expediente transferente: ARA470120057",
    required: false,
  })
  transferenceFile: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 1500, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  transferEntNotes: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "25351", required: false })
  idAddress: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "2", required: false })
  originInfo: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "acta_circunstanciada", required: false })
  circumstantialRecord: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "averiguacion_previa", required: false })
  previousInquiry: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  lawsuit: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  noProtect: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  tocaPenal: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "800-25-00-01-03-2019-31999", required: false })
  noPaper: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2019-07-31T05:00:00.000Z", required: false })
  paperDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  indicated: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  publicMinistry: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  court: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  crime: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 30, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "ELECTRONICA", required: false })
  receiptRoute: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  destinationManagement: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "2", required: false })
  affair: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 60, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({
    example: "800-25-00-01-03-2019",
    maxLength: 60,
    required: false,
  })
  satDeterminant: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 200, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, maxLength: 200, required: false })
  satDirectory?: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  satZoneCoordinator: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "pepv860106v49", required: false })
  userCreated: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2019-08-02T05:00:00.000Z", required: false })
  creationDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "amercado", required: false })
  userModification: string | null;

  @ApiProperty({ example: "2019-08-22T05:00:00.000Z", required: false })
  modificationDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 30, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "SAT_SAE", required: false })
  typeOfTransfer: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  domainExtinction: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "11", required: false })
  version: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 20, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "TE", maxLength: 20, required: false })
  targetUserType: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  trialType: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 50, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "PAMA", maxLength: 50, required: false })
  typeRecord: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 30, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "PAMA", maxLength: 30, required: false })
  requestStatus: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 20, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "CREACION", required: false })
  fileLeagueType: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2019-08-16T05:00:00.000Z", required: false })
  fileLeagueDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 2000, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, maxLength: 2000, required: false })
  rejectionComment: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, maxLength: 100, required: false })
  authorityOrdering: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 30, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, maxLength: 30, required: false })
  instanceBpm: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 200, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, maxLength: 200, required: false })
  trial: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 30, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, maxLength: 30, required: false })
  compensationType: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: null, required: false })
  idStateRequest: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 0, required: false })
  searchSiab: number | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2019-08-16T05:00:00.000Z", required: false })
  priorityDate: Date | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 0, required: false })
  numberOfRejections: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 20, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "SAE503126", maxLength: 20, required: false })
  idRulingDocument: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 30, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({
    example: "DCCR/DECRE/DRM/ATARM/1470/2019",
    maxLength: 30,
    required: false,
  })
  reportSheet: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, maxLength: 100, required: false })
  nameRecipientRuling: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({
    example: "DELEGACIÓN REGIONAL METROPOLITANA",
    maxLength: 100,
    required: false,
  })
  postRecipientRuling: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 4000, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({
    example: "parrafo1_dictamen",
    maxLength: 4000,
    required: false,
  })
  paragraphOneRuling: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 4000, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({
    example: "parrafo2_dictamen",
    maxLength: 4000,
    required: false,
  })
  paragraphTwoRuling: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({
    example: "ANIBAL MERCADO MARTINEZ",
    maxLength: 100,
    required: false,
  })
  nameSignatoryRuling: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({
    example:
      "ADMINISTRADOR TITULAR DE ADMINISTRACION Y RECUPERACION METROPOLITANA",
    maxLength: 100,
    required: false,
  })
  postSignatoryRuling: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 200, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, maxLength: 200, required: false })
  ccpRuling: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({
    example: "EMILIO RODRIGUEZ ESPINO",
    maxLength: 100,
    required: false,
  })
  rulingCreatorName: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 1470, required: false })
  rulingSheetNumber: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 50, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, maxLength: 50, required: false })
  registrationCoordinatorSae: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 1000, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, maxLength: 1000, required: false })
  emailNotification: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 9, required: false })
  keyStateOfRepublic: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 1128877, required: false })
  instanceBpel: number | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2019-08-16T05:00:00.000Z", required: false })
  verificationDateCump: Date | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 12210, required: false })
  idRecordTmp: number | null;
}
