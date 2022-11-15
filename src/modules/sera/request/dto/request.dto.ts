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
  @ApiProperty({ example: "Identificador de solicitud" })
  id?: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "Identificador del expediente" })
  idRecord: number | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2022-08-15 22:55:06" })
  applicationDate: Date | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2022-08-15 22:55:06" })
  receptionDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Nombre del titular" })
  nameOfOwner: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Cargo del titular" })
  holderCharge: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "5544337788" })
  phoneOfOwner: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Email del titular" })
  emailOfOwner: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "624" })
  idTransference: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "1" })
  idStation: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "1" })
  idAuthority: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "1" })
  idRegionalDelegation: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Remitente" })
  sender: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Observaciones" })
  observations: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Usuario destino" })
  targetUser: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  urgentPriority: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  indicatedTaxpayer: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Expediente transferente: ARA470120057" })
  transferenceFile: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  transferEntNotes: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "25351" })
  idAddress: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "2" })
  originInfo: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "acta_circunstanciada" })
  circumstantialRecord: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "averiguacion_previa" })
  previousInquiry: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  lawsuit: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  noProtect: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  tocaPenal: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "800-25-00-01-03-2019-31999" })
  noPaper: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2019-07-31T05:00:00.000Z" })
  paperDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  indicated: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  publicMinistry: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  court: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  crime: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "ELECTRONICA" })
  receiptRoute: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  destinationManagement: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: "2" })
  @ApiProperty({ example: "39" })
  affair: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "800-25-00-01-03-2019" })
  satDeterminant: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  satDirectory: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  satZoneCoordinator: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "pepv860106v49" })
  userCreated: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2019-08-02T05:00:00.000Z" })
  creationDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "amercado" })
  userModification: string | null;

  @ApiProperty({ example: "2019-08-22T05:00:00.000Z" })
  modificationDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "SAT_SAE" })
  typeOfTransfer: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  domainExtinction: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "11" })
  version: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "TE" })
  targetUserType: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  trialType: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "PAMA" })
  typeRecord: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "PAMA" })
  requestStatus: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "CREACION" })
  fileLeagueType: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2019-08-16T05:00:00.000Z" })
  fileLeagueDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  rejectionComment: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  authorityOrdering: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  instanceBpm: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  trial: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  compensationType: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  idStateRequest: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 0 })
  @ApiProperty({ example: null })
  searchSiab: number | null;

  @ApiProperty({ example: null })
  priorityDate: Date | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 0 })
  numberOfRejections: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "SAE503126" })
  idRulingDocument: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "DCCR/DECRE/DRM/ATARM/1470/2019" })
  reportSheet: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  nameRecipientRuling: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "DELEGACIÓN REGIONAL METROPOLITANA" })
  postRecipientRuling: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "parrafo1_dictamen" })
  paragraphOneRuling: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "parrafo2_dictamen" })
  paragraphTwoRuling: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "ANIBAL MERCADO MARTINEZ" })
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
  })
  postSignatoryRuling: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  ccpRuling: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "EMILIO RODRIGUEZ ESPINO" })
  rulingCreatorName: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 1470 })
  rulingSheetNumber: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  registrationCoordinatorSae: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null })
  emailNotification: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 9 })
  keyStateOfRepublic: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 9 })
  @ApiProperty({ example: 1128877 })
  instanceBpel: number | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2019-08-16T05:00:00.000Z" })
  verificationDateCump: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: 12210 })
  idRecordTmp: string | null;
  
}
