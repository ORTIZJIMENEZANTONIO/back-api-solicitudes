import { Type } from 'class-transformer';
import { IsNumber, IsPositive, IsOptional, IsString } from 'class-validator';
import { Message } from '../validation-messages/message';

export class PaginationDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @IsPositive({
    message: Message.POSITIVE(`$property`),
  })
  inicio: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @IsPositive({
    message: Message.POSITIVE(`$property`),
  })
  pageSize: number;

  @IsOptional()
  @IsString({ message: Message.STRING('$property') })
  text?: string | null;
}
