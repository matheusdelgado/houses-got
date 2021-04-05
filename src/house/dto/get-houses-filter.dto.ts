import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class GetHousesFilterDto {
    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    search: string;
}