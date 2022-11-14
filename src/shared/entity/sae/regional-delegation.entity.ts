import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity("cat_delegaciones_regionales", { schema: "sae_nsbdb" })
export class RegionalDelegationEntity {
  
  @ApiProperty({ example: 'Identificador de la delegación regional' })
  @PrimaryGeneratedColumn({
    type: "integer", 
    name: "id_delegacion_regional"
  })
  id: number | null;

  @ApiProperty({ example: 'Descripción de la delegación regional' })
  @Column("character varying", { 
    name: "descripcion",
    length: 150,  
    nullable: true
  })
  description: string | null;

  @ApiProperty({ example: 'Estatus de la delegación regional' })
  @Column( { 
    type: "numeric",
    name: "no_registro", 
    nullable: true
  })
  registerNumber: number | null;

  @ApiProperty({ example: 'id de la entidad delegación regional' })
  @Column( { 
    type: "numeric",
    name: "id_entidad", 
    nullable: true
  })
  idEntity: number | null;

  @ApiProperty({ example: 'Usuario que creó la delegación regional' })
  @Column("character varying", { 
    name: "usuario_creacion",
    length: 100,  
    nullable: true
  })
  creationUser: string | null;

  @ApiProperty({ example: 'Fecha de creación de la delegación regional' })
  @Column("timestamp without time zone", {
    name: "fecha_creacion",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  creationDate: Date | null;

  @ApiProperty({ example: 'Usuario que realizó modificación de la delegación regional' })
  @Column("character varying", { 
    name: "usuario_modificacion",
    length: 100,  
    nullable: true
  })
  editionUser: string | null;

  @ApiProperty({ example: 'Fecha de modificación de la delegación regional' })
  @Column("timestamp without time zone", {
    name: "fecha_modificacion",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  modificationDate: Date | null;
 
  @ApiProperty({ example: 'id de la entidad delegación regional' })
  @Column( { 
    type: "numeric",
    name: "id_zona_geografica", 
    nullable: true
  })
  idGeographicZona: number | null;

  @ApiProperty({ example: 'Version de la delegación regional' })
  @Column( { 
    type: "numeric",
    name: "version", 
    nullable: true
  })
  version: number | null;

  @ApiProperty({ example: 'Delegado regional de la delegación regional' })
  @Column("character varying", { 
    name: "delegado_regional",
    length: 200,  
    nullable: true
  })
  regionalDelegate: string | null;

  @ApiProperty({ example: 'Domicilio de la oficina de la delegación regional' })
  @Column("character varying", { 
    name: "domicilio_oficina",
    length: 200,  
    nullable: true
  })
  officeAddress: string | null;

  @ApiProperty({ example: 'Estatus de la delegación regional' })
  @Column("integer", { 
    name: "status",
    nullable: true
  })
  status: number | null;

  @ApiProperty({ example: 'Clave de la zona delegación regional' })
  @Column("character varying", { 
    name: "cve_zona",
    length: 150,  
    nullable: true
  })
  keyZone: string | null;

  @ApiProperty({ example: 'iva de la delegación regional' })
  @Column("numeric", { 
    name: "iva",
    nullable: true
  })
  iva: number | null;
  
  @ApiProperty({ example: 'Ciudad de la zona delegación regional' })
  @Column("character varying", { 
    name: "ciudad",
    length: 100,  
    nullable: true
  })
  city: string | null;
  
  @ApiProperty({ example: 'Clave de estado de la zona delegación regional' })
  @Column("character varying", { 
    name: "cve_estado",
    length: 20,  
    nullable: true
  })
  keyState: string | null;

}