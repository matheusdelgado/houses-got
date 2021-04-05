import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class CreateHouseDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    region: string;

    @ApiProperty()
    fundation_year: string;

    @ApiProperty()
    current_lord: string;
}