export declare class FilterRequestDto {
    id?: number | null;
    applicationDate?: Date | null;
    nameOfOwner?: string | null;
    holderCharge?: string | null;
    noPaper?: string | null;
    paperDate?: Date | null;
    idRegionalDelegation: number;
    idRegionalDelegationOpd?: number | null;
    keyStateOfRepublic?: number | null;
    idTransference?: number | null;
    idStation?: number | null;
    idAuthority?: number | null;
    transferenceFile?: string | null;
    receiptRoute?: string | null;
    affair?: number | null;
    typeOfTransfer?: string | null;
    requestStatus: string;
    indicatedTaxpayer?: string | null;
    circumstantialRecord?: string | null;
    previousInquiry?: string | null;
    lawsuit?: string | null;
    viewAttr?: boolean;
}
