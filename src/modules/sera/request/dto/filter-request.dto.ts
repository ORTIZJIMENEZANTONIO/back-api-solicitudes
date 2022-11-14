import { ApiProperty } from "@nestjs/swagger";

export class FilterRequestDto {

  @ApiProperty({ example: 1 })
  id?: number | null;

  @ApiProperty({ example: '2022-08-15 22:55:06' })
  applicationDate?: Date | null;

  @ApiProperty({ example: 'Nombre del titular' })
  nameOfOwner?: string | null;

  @ApiProperty({ example: 'Cargo del titular' })
  holderCharge?: string | null;

  @ApiProperty({ example: '800-25-00-01-03-2019-31999' })
  noPaper?: string | null;

  @ApiProperty({ example: '2019-07-31T05:00:00.000Z' })
  paperDate?: Date | null;

  @ApiProperty({ example: 1 })
  idRegionalDelegation: number;

  @ApiProperty({ example: 1 })
  idRegionalDelegationOpd?: number | null;

  @ApiProperty({ example: 9 })
  keyStateOfRepublic?: number | null;

  @ApiProperty({ example: 624 })
  idTransference?: number | null;

  @ApiProperty({ example: 1 })
  idStation?: number | null;

  @ApiProperty({ example: 1 })
  idAuthority?: number | null;

  @ApiProperty({ example: 'ARA470120057' })
  transferenceFile?: string | null;

  @ApiProperty({ example: 'ELECTRONICA' })
  receiptRoute?: string | null;

  @ApiProperty({ example: 39 })
  affair?: number | null;

  @ApiProperty({ example: "SAT_SAE" })
  typeOfTransfer?: string | null;

  @ApiProperty({ example: "PAMA" })
  requestStatus: string;

  @ApiProperty({ example: null })
  indicatedTaxpayer?: string | null;

  @ApiProperty({ example: 'acta_circunstanciada' })
  circumstantialRecord?: string | null;

  @ApiProperty({ example: 'averiguacion_previa' })
  previousInquiry?: string | null;

  @ApiProperty({ example: null })
  lawsuit?: string | null;

  @ApiProperty({ example: null })
  viewAttr?: boolean;
}