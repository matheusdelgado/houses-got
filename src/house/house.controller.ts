import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateHouseDto } from './dto/create-house.dto';
import { GetHousesFilterDto } from './dto/get-houses-filter.dto';
import { House } from './house.entity';
import { HouseService } from './house.service';
import { HouseModel } from './house.model';

@ApiTags('House')
@Controller('house')
export class HouseController {
    constructor(private houseService: HouseService){}

    @Get()
    getHouses(@Query(ValidationPipe) filterDto: GetHousesFilterDto): Promise<House[]>{
        return this.houseService.getHouses(filterDto);
    }

    @Get('/:id')
    @ApiResponse({ status: 200, description: 'OK.' })
    @ApiResponse({ status: 404, description: 'Not found.' })
    getHouseById(@Param('id', ParseIntPipe) id: number): Promise<House>{
        return this.houseService.getHouseById(id);
    }

    @Post()
    @ApiResponse({ status: 200, description: 'OK.' })
    @ApiResponse({ status: 404, description: 'Not found.' })
    @UsePipes(ValidationPipe)
    createHouse(@Body() createHouseDto: CreateHouseDto): Promise<House> {
        return this.houseService.createHouse(createHouseDto);
    }

    @Delete('/:id')
    @ApiResponse({ status: 200, description: 'OK.' })
    @ApiResponse({ status: 404, description: 'Not found.' })
    deleteHouse(@Param('id', ParseIntPipe) id: number): Promise<void>{
        return this.houseService.deleteHouse(id);
    }

    @Patch('/:id/edit')
    @ApiResponse({ status: 200, description: 'OK.' })
    @ApiResponse({ status: 404, description: 'Not found.' })
    updateHouse(
        @Param('id', ParseIntPipe) id: number,
        @Body('name') name: string,
        @Body('region') region: string,
        @Body('fundation_year') fundation_year: string,
        @Body('current_lord') current_lord: string,
    ): Promise<House> {
        return this.houseService.updateHouse(id, name, region, fundation_year, current_lord);
    }

}
