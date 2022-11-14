import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity("cat_autoridad", { schema: "sera" })
export class AuthorityEntity {
  
  @ApiProperty({ example: 'Identificador del transferente por ejemplo 1' })
  @PrimaryGeneratedColumn({
    type: "integer",  
    name: "no_transferente"
  })
  idTransferer: number | null;

  @ApiProperty({ example: 'Número de emisora ej. 1' })
  @Column({
    type: "numeric", 
    name: "no_emisora",
    nullable: false,
  })
  idIssuer: number;

  @ApiProperty({ example: 'Número de autoridad ej. 1' })
  @Column({
    type: "numeric", 
    name: "no_autoridad",
    nullable: false,
  })
  idAthority: number;

  @ApiProperty({ example: 'Número de transferente amisor de la autoridad ej. 1' })
  @Column({
    type: "numeric", 
    name: "no_tran_emi_aut",
    nullable: true,
  })
  idAuthorityIssuerTransferor: number | null;

  @ApiProperty({ example: 'Descripción de la autoridad' })
  @Column({
    type: "character varying", 
    name: "desc_autoridad",
    length: 150,
    nullable: true,
  })
  authorityDescription: string | null;

  @ApiProperty({ example: 'Número de ciudad ej. 1' })
  @Column({
    type: "numeric", 
    name: "no_ciudad",
    nullable: true,
  })
  idCity: number | null;

}