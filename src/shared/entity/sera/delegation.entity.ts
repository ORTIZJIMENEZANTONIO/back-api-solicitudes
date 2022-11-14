import { ApiProperty } from "@nestjs/swagger";
import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryColumn 
  } from "typeorm"; 
   
  @Entity("cat_delegacion", { schema: "sera" }) 
  export class DelegationEntity { 
   
    @PrimaryColumn({type:'numeric',name:'id_delegacion'})
    id: number;

    @PrimaryColumn({type:'numeric',name:'etapa_edo'})
    etapaEdo: number;

    @PrimaryColumn({type:'character varying',name:'cve_estado',length:30})
    cveState: string;

    @Column("character varying",{name:'descripcion',length:150})
    description:string;

    @Column("character varying",{name:'domicilio_oficina',length:200})
    addressOffice:string;

    @Column("character varying",{name:'delegado_regional',length:200})
    regionalDelegate:string;

    @Column("character varying",{name:'cve_zona',length:150})
    cveZone:string;

    @Column("character varying",{name:'ciudad',length:100})
    city:string;

    @Column("numeric",{name:'status'})
    status : number;

    @Column("numeric",{name:'iva'})
    iva : number;    

    @Column("numeric",{name:'no_registro'})
    noRegister : number;

    @Column("numeric",{name:'cve_zona_contrato'})
    zoneContractCVE : number;

    @Column("integer", { name: "cve_zona_vigilancia" }) 
    zoneVigilanceCVE : number

    @Column("numeric", { name: "dif_hora"}) 
    diffHours : number;    

    @Column("numeric", { name: "version"}) 
    version : number;

    @ApiProperty({ example: 'Usuario que creó un municipio' })
    @Column("character varying", {name: "usuario_creacion", length: 100, nullable: false})
    creationUser: string;

    @ApiProperty({ example: 'Fecha de creación del municipio' })
    @Column({type: Date, name: "fecha_creacion"})  
    creationDate: Date;

    @ApiProperty({ example: 'Usuario que realizó modificación de un municipio' })
    @Column("character varying", {name: "usuario_modificacion", length: 100,nullable: false})
    editionUser: string;

    @ApiProperty({ example: 'Fecha de modificación del municipio' })
    @Column({type: Date, name: "fecha_modificacion"})
    modificationDate: Date;

  }