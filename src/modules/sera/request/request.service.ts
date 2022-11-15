import {
  Injectable,
  Inject,
  Logger,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { RequestEntity } from "./entity/request.entity";
import { RequestDto } from "./dto/request.dto";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { TransferentEntity } from "src/shared/entity/sera/transferent.entity";
import { StationEntity } from "src/shared/entity/sera/station.entity";
import { AuthorityEntity } from "src/shared/entity/sera/authority.entity";
import { RegionalDelegationEntity } from "src/shared/entity/sae/regional-delegation.entity";
import { AffairEntity } from "src/shared/entity/sera/affair.entity";
import { StateOfRepublicEntity } from "src/shared/entity/sera/state-of-republic.entity";
import { DomicileEntity } from "src/shared/entity/sae/domicile.entity";
import { FilterRequestDto } from "./dto/filter-request.dto";
import { Message } from "src/shared/validation-messages/message";

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(RequestEntity)
    private entity: Repository<RequestEntity>
  ) {}

  async createRequest(requestDto: RequestDto) {
    delete requestDto.id;
    return await this.entity.save(requestDto);
  }

  // filter con status y usuario
  async getAllRequests(
    filter: FilterRequestDto,
    { inicio, pageSize }: PaginationDto
  ) {
    const res = await this.entity
      .createQueryBuilder("request")
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
      .innerJoinAndMapOne(
        "request.idTransference",
        TransferentEntity,
        "transferer",
        "transferer.id = request.idTransference "
      )
      .innerJoinAndMapOne(
        "request.idStation",
        StationEntity,
        "station",
        "station.id = request.idStation"
      )
      .innerJoinAndMapOne(
        "request.idAuthority",
        AuthorityEntity,
        "authority",
        "authority.idAthority = request.idAuthority"
      )
      .innerJoinAndMapOne(
        "request.idRegionalDelegation",
        RegionalDelegationEntity,
        "regionalDelegation",
        "regionalDelegation.id = request.idRegionalDelegation"
      )
      .innerJoinAndMapOne(
        "request.affair",
        AffairEntity,
        "affairTbl",
        "affairTbl.code = request.affair"
      )
      .innerJoinAndMapOne(
        "request.keyStateOfRepublic",
        StateOfRepublicEntity,
        "stateOfRepublic",
        "stateOfRepublic.cveState = request.keyStateOfRepublic"
      )
      .where(filter)
      .take(pageSize || 10)
      .orderBy("request.id", "DESC")
      .skip((inicio - 1) * pageSize || 0)
      .getManyAndCount();

    return {
      data: res[0],
      count: res[1],
    };
  }

  // filter con varios campos
  async getRequestsByFilter(
    filter: FilterRequestDto,
    { inicio, pageSize }: PaginationDto
  ) {
    const res = await this.entity
      .createQueryBuilder("request")
      .innerJoinAndMapOne(
        "request.idTransference",
        TransferentEntity,
        "transferer",
        "transferer.id = request.idTransference "
      )
      .innerJoinAndMapOne(
        "request.idStation",
        StationEntity,
        "station",
        "station.id = request.idStation"
      )
      .innerJoinAndMapOne(
        "request.idAuthority",
        AuthorityEntity,
        "authority",
        "authority.idAthority = request.idAuthority"
      )
      .innerJoinAndMapOne(
        "request.idRegionalDelegation",
        RegionalDelegationEntity,
        "regionalDelegation",
        "regionalDelegation.id = request.idRegionalDelegation"
      )
      .innerJoinAndMapOne(
        "request.affair",
        AffairEntity,
        "affairTbl",
        "affairTbl.code = request.affair"
      )
      .innerJoinAndMapOne(
        "request.keyStateOfRepublic",
        StateOfRepublicEntity,
        "stateOfRepublic",
        "stateOfRepublic.cveState = request.keyStateOfRepublic"
      )
      .innerJoinAndMapOne(
        "request.idAddress",
        DomicileEntity,
        "domicile",
        "domicile.idDomicile = request.idAddress"
      )
      .where(filter)
      .take(pageSize || 10)
      .orderBy("request.id", "DESC")
      .skip((inicio - 1) * pageSize || 0)
      .getManyAndCount();

    return {
      data: res[0],
      count: res[1],
    };
  }

  async getRequestById(id: number) {
    return await this.entity
      .createQueryBuilder("request")
      .innerJoinAndMapOne(
        "request.idTransference",
        TransferentEntity,
        "transferer",
        "transferer.id = request.idTransference "
      )
      .innerJoinAndMapOne(
        "request.idStation",
        StationEntity,
        "station",
        "station.id = request.idStation"
      )
      .innerJoinAndMapOne(
        "request.idAuthority",
        AuthorityEntity,
        "authority",
        "authority.idAthority = request.idAuthority"
      )
      .innerJoinAndMapOne(
        "request.idRegionalDelegation",
        RegionalDelegationEntity,
        "regionalDelegation",
        "regionalDelegation.id = request.idRegionalDelegation"
      )
      .innerJoinAndMapOne(
        "request.affair",
        AffairEntity,
        "affairTbl",
        "affairTbl.code = request.affair"
      )
      .innerJoinAndMapOne(
        "request.keyStateOfRepublic",
        StateOfRepublicEntity,
        "stateOfRepublic",
        "stateOfRepublic.cveState = request.keyStateOfRepublic"
      )
      .innerJoinAndMapOne(
        "request.idAddress",
        DomicileEntity,
        "domicile",
        "domicile.idDomicile = request.idAddress"
      )
      .where("request.id = :id", { id })
      .getOne();
  }

  async updateRequest(id: number, requestDto: RequestDto) {
    const element = await this.entity.findOne({ where: { id: id } });
    if (!element) {
      throw new HttpException(Message.NOT_FOUND(), HttpStatus.NOT_FOUND);
    }
    delete requestDto.id;
    return await this.entity.update(id, requestDto);
  }

  async deleteRequest(id: number) {
    const { affected } = await this.entity.delete(id);
    if (affected == 0) {
      throw new HttpException(Message.NOT_FOUND(), HttpStatus.NOT_FOUND);
    }
    return affected;
  }
}
