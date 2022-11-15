import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiParam,
  ApiBody,
  ApiQuery
} from '@nestjs/swagger';

import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Message } from 'src/shared/validation-messages/message';
import { FilterRequestDto } from './dto/filter-request.dto';
import { RequestDto } from './dto/request.dto';
import { RequestService } from './request.service';

@ApiCreatedResponse()
@Controller('request')
@ApiTags('request')
export class RequestController {

  constructor(
    private readonly requestService: RequestService
  ) { }

  @ApiOperation({ summary: 'Guardar nueva solicitud' })
  @ApiBody({
    type: RequestDto,
    description: 'Información de la solicitud a guardar'
  })
  @ApiResponse({
    status: 200,
    description: 'Guarda solicitud',
    type: RequestDto,
  })
  @Post()
  async createRequest(@Body() requestDto: RequestDto) {
    const task = await this.requestService.createRequest(requestDto);
    return task ?? 'Error';
  }

  @ApiOperation({ summary: 'Obtener lista de todas las solicitudes' })
  @ApiParam({
    name: 'requestStatus',
    type: String,
    description: 'Estatus'
  })
  @ApiParam({
    name: 'idRegionalDelegation',
    type: Number,
    description: 'Identificador de la delegación regional'
  })
  @ApiQuery({
    name: 'inicio',
    type: Number,
    required: false,
    example: 1,
  })
  @ApiQuery({
    name: 'pageSize',
    type: Number,
    required: false,
    example: 5,
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de solicitudes existentes',
    type: RequestDto,
  })
  @Get(':requestStatus/:idRegionalDelegation')
  async getAllRequests( @Param('requestStatus') requestStatus: string, @Param('idRegionalDelegation') idRegionalDelegation: number, @Query() pagination: PaginationDto ) {
    return await this.requestService.getAllRequests( {requestStatus, idRegionalDelegation} ,pagination );
  }

  @ApiOperation({ summary: 'Obtener lista de todas las solicitudes filtradas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de solicitudes existentes - filtro',
    type: RequestDto,
  })
  @Post("filter")
  async getRequestsByFilter(@Body() filter: FilterRequestDto, @Query() pagination: PaginationDto) {
    return await this.requestService.getRequestsByFilter(filter, pagination);
  }

  @ApiOperation({ summary: 'Obtener solicitud por su id' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Identificador de la solicitud'
  })
  @ApiResponse({
    status: 200,
    description: 'Solicitud obtenida por su identificador',
    type: RequestDto,
  })
  @Get(":id")
  async getRequestById(@Param("id") id: number) {
    const warehouseFound = await this.requestService.getRequestById(id);
    return warehouseFound
      ? warehouseFound
      : { statusCode: '404', message: 'Request not found', error: "Not found" };
  }

  @ApiOperation({ summary: 'Modificar solicitud' })
  @ApiParam({
    name: 'idToUpdate',
    type: Number,
    description: 'Identificador numérico de la solicitud'
  })
  @ApiBody({
    type: RequestDto,
    description: 'Objeto de la solicitud a modificar'
  })
  @Put(":idToUpdate")
  async updateRequest(@Param("idToUpdate") idToUpdate: number, @Body() data: RequestDto) {
    const { affected } = await this.requestService.updateRequest(idToUpdate, data);
    return affected > 0
      ? { statusCode: '200', message: 'Request UPDATED SUCCESSFULLY' }
      : { statusCode: '404', message: 'Request not found', error: "Not found" };
  }

  @ApiOperation({ summary: 'Borrar solicitud por su id' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Identificador de la solicitud a borrar'
  })
  @ApiResponse({
    status: 200,
    description: 'Borrar solicitud por su identificador',
    type: RequestDto,
  })
  @Delete(":id")
  async deleteRequest(@Param("id") id: number) {
    const affected = await this.requestService.deleteRequest(id);
    return affected ? Message.DELETED() : 'Error';
  }


}
