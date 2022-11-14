import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity("cat_asuntos", { schema: "sera" })
export class AffairEntity {
  
  @ApiProperty({ example: 'Código del asunto por ejemplo 1' })
  @PrimaryGeneratedColumn({
    type: "integer",  
    name: "codigo"
  })
  code: number | null;

  @ApiProperty({ example: 'Descripción del asunto' })
  @Column({
    type: "character varying", 
    name: "descripcion",
    length: 80,
    nullable: true,
  })
  description: string | null;

  @ApiProperty({ example: 'Clave relación bien' })
  @Column({
    type: "character varying", 
    name: "clv_relacion_bien",
    length: 1,
    nullable: true,
  })
  relationPropertyKey: string | null;
  
  @ApiProperty({ example: 'Tipo de volante' })
  @Column({
    type: "character varying", 
    name: "tipo_volante",
    length: 2,
    nullable: true,
  })
  referralNoteType: string | null;

  @ApiProperty({ example: 'Version del usuario' })
  @Column({
    type: "character varying", 
    name: "ver_usuario",
    length: 1,
    nullable: true,
  })
  versionUser: string | null;

  @ApiProperty({ example: 'Usuario que creó' })
  @Column("character varying", { 
    name: "usuario_adicion",
    length: 60,  
    nullable: true
  })
  creationUser: string | null;

  @ApiProperty({ example: 'Fecha de creación' })
  @Column("timestamp without time zone", {
    name: "fecha_adicion",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  creationDate: Date | null;

  @ApiProperty({ example: 'Usuario que realizó modificación' })
  @Column("character varying", { 
    name: "usuario_modifica",
    length: 60,  
    nullable: true
  })
  editionUser: string | null;

  @ApiProperty({ example: 'Fecha de modificación' })
  @Column("timestamp without time zone", {
    name: "fecha_modifica",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  modificationDate: Date | null;

  @ApiProperty({ example: 'Npumero de registro por ejemplo 1' })
  @Column({
    type: "integer",  
    name: "no_registro",
    nullable: true,
  })
  idRegister: number | null;
  
}