import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
  } from "typeorm";

  @Entity("domicilios", { schema: "sae_nsbdb" })
  export class DomicileEntity {
    @PrimaryColumn("double precision", {
      primary: true,
      name: "id_domicilio",
      precision: 53,
    })
    idDomicile: number;
  
    @Column("double precision", {
      name: "cve_estado",
      nullable: true,
      precision: 53,
    })
    cveEstado: number | null;
  
    @Column("character varying", {
      name: "cve_municipio",
      nullable: true,
      length: 30,
    })
    cveMunicipio: string | null;
  
    @Column("character varying", {
      name: "cve_localidad",
      nullable: true,
      length: 100,
    })
    cveLocalidad: string | null;
  
    @Column("character varying", {
      name: "num_exterior",
      nullable: true,
      length: 30,
    })
    numExterior: string | null;
  
    @Column("character varying", {
      name: "num_interior",
      nullable: true,
      length: 30,
    })
    numInterior: string | null;
  
    @Column("character varying", { name: "codigo", nullable: true, length: 6 })
    codigo: string | null;
  
    @Column("character varying", {
      name: "cve_via_ref1",
      nullable: true,
      length: 30,
    })
    cveViaRef1: string | null;
  
    @Column("character varying", {
      name: "cve_via_ref2",
      nullable: true,
      length: 30,
    })
    cveViaRef2: string | null;
  
    @Column("character varying", {
      name: "cve_via_ref3",
      nullable: true,
      length: 30,
    })
    cveViaRef3: string | null;
  
    @Column("character varying", {
      name: "descripcion",
      nullable: true,
      length: 2000,
    })
    descripcion: string | null;
  
    @Column("character varying", { name: "latitud", nullable: true, length: 30 })
    latitud: string | null;
  
    @Column("character varying", { name: "longitud", nullable: true, length: 30 })
    longitud: string | null;
  
    @Column("character varying", {
      name: "via_nombre",
      nullable: true,
      length: 100,
    })
    viaNombre: string | null;
  
    @Column("character varying", {
      name: "via_origen",
      nullable: true,
      length: 100,
    })
    viaOrigen: string | null;
  
    @Column("character varying", {
      name: "via_destino",
      nullable: true,
      length: 100,
    })
    viaDestino: string | null;
  
    @Column("character varying", {
      name: "via_cadenamiento",
      nullable: true,
      length: 100,
    })
    viaCadenamiento: string | null;
  
    @Column("character varying", {
      name: "usuario_creacion",
      nullable: true,
      length: 100,
    })
    usuarioCreacion: string | null;
  
    @Column("timestamp without time zone", {
      name: "fecha_creacion",
      nullable: true,
    })
    fechaCreacion: Date | null;
  
    @Column("character varying", {
      name: "usuario_modificacion",
      nullable: true,
      length: 100,
    })
    usuarioModificacion: string | null;
  
    @Column("timestamp without time zone", {
      name: "fecha_modificacion",
      nullable: true,
    })
    fechaModificacion: Date | null;
  
    @Column("character varying", {
      name: "cve_asentamiento",
      nullable: true,
      length: 100,
    })
    cveAsentamiento: string | null;
  
    @Column("double precision", {
      name: "version",
      nullable: true,
      precision: 53,
    })
    version: number | null;
  
    @Column("double precision", {
      name: "id_solicitud",
      nullable: true,
      precision: 53,
    })
    idSolicitud: number | null;
  
    @Column("double precision", {
      name: "id_delegacion_regional",
      nullable: true,
      precision: 53,
    })
    idDelegacionRegional: number | null;
  
    
  }
  