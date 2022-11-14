"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const request_entity_1 = require("./entity/request.entity");
const transferent_entity_1 = require("../../../shared/entity/sera/transferent.entity");
const station_entity_1 = require("../../../shared/entity/sera/station.entity");
const authority_entity_1 = require("../../../shared/entity/sera/authority.entity");
const regional_delegation_entity_1 = require("../../../shared/entity/sae/regional-delegation.entity");
const affair_entity_1 = require("../../../shared/entity/sera/affair.entity");
const state_of_republic_entity_1 = require("../../../shared/entity/sera/state-of-republic.entity");
const domicile_entity_1 = require("../../../shared/entity/sae/domicile.entity");
let RequestService = class RequestService {
    constructor(requestRepository) {
        this.requestRepository = requestRepository;
    }
    async createRequest(requestDto) {
        return await this.requestRepository.save(requestDto);
    }
    async getAllRequests(filter, { inicio, pageSize }) {
        const res = await this.requestRepository.createQueryBuilder("request")
            .select([
            "request.id",
            "request.applicationDate",
            "request.nameOfOwner",
            "request.holderCharge",
            "request.noPaper",
            "request.paperDate",
            "COALESCE( request.registrationCoordinatorSae, request.id_delegacion_regional::text, 'null' ) as ex",
            "request.registrationCoordinatorSae",
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
            .innerJoinAndMapOne("request.idTransference", transferent_entity_1.TransferentEntity, "transferer", "transferer.id = request.idTransference ")
            .innerJoinAndMapOne("request.idStation", station_entity_1.StationEntity, "station", "station.id = request.idStation")
            .innerJoinAndMapOne("request.idAuthority", authority_entity_1.AuthorityEntity, "authority", "authority.idAthority = request.idAuthority")
            .innerJoinAndMapOne("request.idRegionalDelegation", regional_delegation_entity_1.RegionalDelegationEntity, "regionalDelegation", "regionalDelegation.id = request.idRegionalDelegation")
            .innerJoinAndMapOne("request.affair", affair_entity_1.AffairEntity, "affairTbl", "affairTbl.code = request.affair")
            .innerJoinAndMapOne("request.keyStateOfRepublic", state_of_republic_entity_1.StateOfRepublicEntity, "stateOfRepublic", "stateOfRepublic.cveState = request.keyStateOfRepublic")
            .where(filter)
            .take(pageSize || 10)
            .orderBy('request.id', 'DESC')
            .skip((inicio - 1) * pageSize || 0)
            .getManyAndCount();
        return {
            data: res[0],
            count: res[1]
        };
    }
    async getRequestsByFilter(filter, { inicio, pageSize }) {
        const res = await this.requestRepository.createQueryBuilder("request")
            .innerJoinAndMapOne("request.idTransference", transferent_entity_1.TransferentEntity, "transferer", "transferer.id = request.idTransference ")
            .innerJoinAndMapOne("request.idStation", station_entity_1.StationEntity, "station", "station.id = request.idStation")
            .innerJoinAndMapOne("request.idAuthority", authority_entity_1.AuthorityEntity, "authority", "authority.idAthority = request.idAuthority")
            .innerJoinAndMapOne("request.idRegionalDelegation", regional_delegation_entity_1.RegionalDelegationEntity, "regionalDelegation", "regionalDelegation.id = request.idRegionalDelegation")
            .innerJoinAndMapOne("request.affair", affair_entity_1.AffairEntity, "affairTbl", "affairTbl.code = request.affair")
            .innerJoinAndMapOne("request.keyStateOfRepublic", state_of_republic_entity_1.StateOfRepublicEntity, "stateOfRepublic", "stateOfRepublic.cveState = request.keyStateOfRepublic")
            .innerJoinAndMapOne("request.idAddress", domicile_entity_1.DomicileEntity, "domicile", "domicile.idDomicile = request.idAddress")
            .where(filter)
            .take(pageSize || 10)
            .orderBy('request.id', 'DESC')
            .skip((inicio - 1) * pageSize || 0)
            .getManyAndCount();
        return {
            data: res[0],
            count: res[1]
        };
    }
    async getRequestById(id) {
        return await this.requestRepository.createQueryBuilder("request")
            .innerJoinAndMapOne("request.idTransference", transferent_entity_1.TransferentEntity, "transferer", "transferer.id = request.idTransference ")
            .innerJoinAndMapOne("request.idStation", station_entity_1.StationEntity, "station", "station.id = request.idStation")
            .innerJoinAndMapOne("request.idAuthority", authority_entity_1.AuthorityEntity, "authority", "authority.idAthority = request.idAuthority")
            .innerJoinAndMapOne("request.idRegionalDelegation", regional_delegation_entity_1.RegionalDelegationEntity, "regionalDelegation", "regionalDelegation.id = request.idRegionalDelegation")
            .innerJoinAndMapOne("request.affair", affair_entity_1.AffairEntity, "affairTbl", "affairTbl.code = request.affair")
            .innerJoinAndMapOne("request.keyStateOfRepublic", state_of_republic_entity_1.StateOfRepublicEntity, "stateOfRepublic", "stateOfRepublic.cveState = request.keyStateOfRepublic")
            .innerJoinAndMapOne("request.idAddress", domicile_entity_1.DomicileEntity, "domicile", "domicile.idDomicile = request.idAddress")
            .where("request.id = :id", { id })
            .getOne();
    }
    async updateRequest(id, requestDto) {
        return await this.requestRepository.update(id, requestDto);
    }
    async deleteRequest(id) {
        return await this.requestRepository.delete(id);
    }
};
RequestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(request_entity_1.RequestEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RequestService);
exports.RequestService = RequestService;
//# sourceMappingURL=request.service.js.map