import { Column, CreateDateColumn, UpdateDateColumn, Entity, Index, OneToMany, PrimaryColumn   } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity("cat_estado", { schema: "sae_nsbdb" })
export class StateOfRepublicEntity {
  
  @ApiProperty({ example: 'Identificador del estado' })
  @PrimaryColumn("character varying", { name: "cve_estado", length: 15, nullable: false})
   cveState : string;  

  @ApiProperty({ example: 'DESC_ESTADO' })
  @Column("character varying", {name: "nombre_entidad", length: 40})
  name: string;

  //@ApiProperty({ example: 'DESC_ESTADO' })
  //@Column("character varying", {name: "desc_estado", length: 200})
  //descState: string;

  @ApiProperty({ example: 'CODE_ESTADO' })
  @Column("character varying", {name: "code_estado", length: 30})
  codeState: string;
  
  //@ApiProperty({ example: 'Número de registro' })
  //@Column({type: "numeric", name: "no_registro", width: 5})
  //noRegister: number;

  //@ApiProperty({ example: 'NMTABLA' })
  //@Column({ type: "numeric", name: "nmtabla", width: 5})
  //nameTable: number;

  //@ApiProperty({ example: 'Abreviatura' })
  //@Column("character varying", {name: "abreviatura", length: 3})
  //abbreviation: string;

  //@ApiProperty({ example: 'Riesgo' })
  //@Column("character varying", {name: "riesgo", length: 2})
  //risk: string;

  @ApiProperty({ example: 'Versión' })
  @Column({ type: "numeric", name: "version"})
  version: number;

  @ApiProperty({ example: 'Zona horaria del estado' })
  @Column("character varying", {name: "zona_horaria_std", length: 20})
  timeZonaStd: string;

  @ApiProperty({ example: 'Versión de la zona horaria del estado' })
  @Column("character varying", {name: "zona_horaria_ver", length: 20})
  timeZonaView: string;

  @ApiProperty({ example: 'Usuario que creó el estado' })
   @Column("character varying", {name: "usuario_creacion", length: 100, nullable:true})
   creationUser: string;
   
  @ApiProperty({ example: 'Fecha de creación del estado - Nota:el orm lo establece automáticamente' })
  @CreateDateColumn()  
  //fecha_creacion: Date;

   @ApiProperty({ example: 'Usuario que realizó modificación del estado' })
   @Column("character varying", { name: "usuario_modificacion", length: 100,nullable:true})
   editionUser: string;

    @ApiProperty({ example: 'Fecha de modificación del estado - Nota:el orm lo establece automáticamente' })
  @UpdateDateColumn()
  fecha_modificacion: Date;
}