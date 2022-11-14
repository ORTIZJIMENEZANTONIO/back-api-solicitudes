import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cat_emisora", { schema: "sera" })
export class StationEntity {
    @PrimaryGeneratedColumn({ type: "int4", name: "no_emisora" })
    id: number;
    @Column("int", { name: "no_transferente" })
    numStation: number;
    @Column("varchar", { name: "desc_emisora", length: 255 })
    descStation: string;

    }