import { Injectable, Inject, Logger } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RequestEntity } from './entity/request.entity';
import { RequestDto } from './dto/request.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { TransferentEntity } from 'src/shared/entity/sera/transferent.entity';
import { StationEntity } from 'src/shared/entity/sera/station.entity';
import { AuthorityEntity } from 'src/shared/entity/sera/authority.entity'; 
import { RegionalDelegationEntity } from 'src/shared/entity/sae/regional-delegation.entity';
import { AffairEntity } from 'src/shared/entity/sera/affair.entity';
import { StateOfRepublicEntity } from 'src/shared/entity/sera/state-of-republic.entity';
import { DomicileEntity } from 'src/shared/entity/sae/domicile.entity';
import { FilterRequestDto } from './dto/filter-request.dto';

@Injectable()
export class RequestService {

  constructor(
    @InjectRepository(RequestEntity) private requestRepository: Repository<RequestEntity>,
  ) { }

  async createRequest(requestDto: RequestDto) {
    return await this.requestRepository.save(requestDto);
  }

  // filter con status y usuario
  async getAllRequests( filter: FilterRequestDto, { inicio, pageSize }: PaginationDto) {
    const res = await this.requestRepository.createQueryBuilder("request")
      .select([
        "request.id",
        "request.applicationDate",
        "request.nameOfOwner",
        "request.holderCharge",
        "request.noPaper",
        "request.paperDate",
        // NVL(S.COORDREGSAE, S.ID_DELEGACION_REGIONAL)     isnull or not null
        "COALESCE( request.registrationCoordinatorSae, request.id_delegacion_regional::text, 'null' ) as ex",
        "request.registrationCoordinatorSae",
        // ID_DELEGACION_REGIONAL_OPD,    
        "request.idRegionalDelegation",
        "request.keyStateOfRepublic",
        "request.idTransference",
        "request.idStation",
        "request.idAuthority",
        "request.transferenceFile",
        "request.receiptRoute",
        "request.affair",
        "request.typeOfTransfer",
        "request.requestStatus",
        "request.indicatedTaxpayer",
        "request.circumstantialRecord",
        "request.previousInquiry",
        "request.lawsuit",
      ])
      .innerJoinAndMapOne("request.idTransference", TransferentEntity, "transferer", "transferer.id = request.idTransference ")
      .innerJoinAndMapOne("request.idStation", StationEntity, "station", "station.id = request.idStation")
      .innerJoinAndMapOne("request.idAuthority", AuthorityEntity, "authority", "authority.idAthority = request.idAuthority")
      .innerJoinAndMapOne("request.idRegionalDelegation", RegionalDelegationEntity, "regionalDelegation", "regionalDelegation.id = request.idRegionalDelegation")
      .innerJoinAndMapOne("request.affair", AffairEntity, "affairTbl", "affairTbl.code = request.affair")
      .innerJoinAndMapOne("request.keyStateOfRepublic", StateOfRepublicEntity, "stateOfRepublic", "stateOfRepublic.cveState = request.keyStateOfRepublic")
      .where(filter)
      .take(pageSize || 10)
      .orderBy('request.id', 'DESC')
      .skip((inicio - 1) * pageSize || 0)
      .getManyAndCount();

    return {
      data: res[0],
      count: res[1]
    }
  }

  // filter con varios campos
  async getRequestsByFilter( filter: FilterRequestDto, { inicio, pageSize }: PaginationDto) {
    const res = await this.requestRepository.createQueryBuilder("request")
      .innerJoinAndMapOne("request.idTransference", TransferentEntity, "transferer", "transferer.id = request.idTransference ")
      .innerJoinAndMapOne("request.idStation", StationEntity, "station", "station.id = request.idStation")
      .innerJoinAndMapOne("request.idAuthority", AuthorityEntity, "authority", "authority.idAthority = request.idAuthority")
      .innerJoinAndMapOne("request.idRegionalDelegation", RegionalDelegationEntity, "regionalDelegation", "regionalDelegation.id = request.idRegionalDelegation")
      .innerJoinAndMapOne("request.affair", AffairEntity, "affairTbl", "affairTbl.code = request.affair")
      .innerJoinAndMapOne("request.keyStateOfRepublic", StateOfRepublicEntity, "stateOfRepublic", "stateOfRepublic.cveState = request.keyStateOfRepublic")
      .innerJoinAndMapOne("request.idAddress", DomicileEntity, "domicile", "domicile.idDomicile = request.idAddress")
      .where(filter)
      .take(pageSize || 10)
      .orderBy('request.id', 'DESC')
      .skip((inicio - 1) * pageSize || 0)
      .getManyAndCount();

    return {
      data: res[0],
      count: res[1]
    }
  }

  async getRequestById(id: number) {
    return await this.requestRepository.createQueryBuilder("request")
    .innerJoinAndMapOne("request.idTransference", TransferentEntity, "transferer", "transferer.id = request.idTransference ")
    .innerJoinAndMapOne("request.idStation", StationEntity, "station", "station.id = request.idStation")
    .innerJoinAndMapOne("request.idAuthority", AuthorityEntity, "authority", "authority.idAthority = request.idAuthority")
    .innerJoinAndMapOne("request.idRegionalDelegation", RegionalDelegationEntity, "regionalDelegation", "regionalDelegation.id = request.idRegionalDelegation")
    .innerJoinAndMapOne("request.affair", AffairEntity, "affairTbl", "affairTbl.code = request.affair")
    .innerJoinAndMapOne("request.keyStateOfRepublic", StateOfRepublicEntity, "stateOfRepublic", "stateOfRepublic.cveState = request.keyStateOfRepublic")
    .innerJoinAndMapOne("request.idAddress", DomicileEntity, "domicile", "domicile.idDomicile = request.idAddress")
    .where("request.id = :id", { id })
    .getOne()
  }

  async updateRequest(id: number, requestDto: RequestDto) {
    return await this.requestRepository.update(id, requestDto);
  }

  async deleteRequest(id: number) {
    return await this.requestRepository.delete(id)
  }

}
