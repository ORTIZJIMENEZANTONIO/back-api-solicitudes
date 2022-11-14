import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cat_transferente", { schema: "sera" })
export class TransferentEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "no_transferente" })
    id: number;
    @Column("varchar", { name: "desc_transferente", length: 100 })
    description: string;

    @Column("varchar", { name: "clave", length: 100 })
    key: string;

    @Column("int", { name: "cvman" })
    cvman: number;

    @Column("varchar", { name: "indcap", length: 100 })
    indcap: string;

    @Column("varchar", { name: "porc_comi", length: 100 })
    porc_comi: string;

    @Column("int", { name: "activo" })
    active: number;

    @Column("varchar", { name: "riesgo", length: 2 })
    risk: string;
}