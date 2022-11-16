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

export class FilterRequestDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 1, required: false })
  id?: number | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2022-08-15 22:55:06", required: false })
  applicationDate?: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Nombre del titular", required: false })
  nameOfOwner?: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "Cargo del titular", required: false })
  holderCharge?: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "800-25-00-01-03-2019-31999", required: false })
  noPaper?: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: "2019-07-31T05:00:00.000Z", required: false })
  paperDate?: Date | null;

  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 1 })
  idRegionalDelegation: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 1, required: false })
  idRegionalDelegationOpd?: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 9, required: false })
  keyStateOfRepublic?: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 624, required: false })
  idTransference?: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 1, required: false })
  idStation?: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 1, required: false })
  idAuthority?: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 1250, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "ARA470120057", required: false })
  transferenceFile?: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 30, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "ELECTRONICA", required: false })
  receiptRoute?: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 39, required: false })
  affair?: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 30, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "SAT_SAE", required: false })
  typeOfTransfer?: string | null;

  @Type(() => String)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 30, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "PAMA" })
  requestStatus: string;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 200, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  indicatedTaxpayer?: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "acta_circunstanciada", required: false })
  circumstantialRecord?: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: "averiguacion_previa", required: false })
  previousInquiry?: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, {
    message: Message.LENGTH("$property", "$constraint1 $constraint2"),
  })
  @ApiProperty({ example: null, required: false })
  lawsuit?: string | null;

  @Type(() => Boolean)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsBoolean({
    message: Message.BOOLEAN("$property"),
  })
  @ApiProperty({ example: null })
  viewAttr?: boolean;
}
