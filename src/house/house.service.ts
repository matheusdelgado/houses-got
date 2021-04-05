import { Injectable, NotFoundException } from '@nestjs/common';
import { House } from './house.entity';
import { v4 as uuid } from 'uuid';
import { CreateHouseDto } from './dto/create-house.dto';
import { HouseController } from './house.controller';
import { GetHousesFilterDto } from './dto/get-houses-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HouseRepository } from './house.repository';
import { HouseModel } from './house.model';

@Injectable()
export class HouseService {
    constructor(
        @InjectRepository(HouseRepository)
        private houseRepository: HouseRepository,
    ) {}

    async getHouses(filterDto: GetHousesFilterDto): Promise<House[]>{
        return this.houseRepository.getHouse(filterDto);
    }

    async getHouseById(id: number): Promise<House>{
        const found = await this.houseRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`O ID "${id}" não foi encontrado.`);
        }

        return found;
    }

    async createHouse(createHouseDto: CreateHouseDto){
        return this.houseRepository.createHouse(createHouseDto);
    }

    async deleteHouse(id: number): Promise<void> {
        const result = await this.houseRepository.delete(id);
        
        if(result.affected === 0){
            throw new NotFoundException(`O ID "${id}" não foi encontrado.`);
        }
    }

    async updateHouse(id: number, name: string, region: string, fundation_year: string, current_lord: string): Promise<House>{
        const house = await this.getHouseById(id);

        house.name = name;
        house.region = region;
        house.fundation_year = fundation_year;
        house.current_lord = current_lord;

        await house.save();

        return house;
    }

    /** 

    getHousesWithFilters(filterDto: GetHousesFilterDto): House[] {
        const { search } = filterDto;

        let houses = this.getAllHouses();

        if(houses){
            houses = houses.filter(house => house.name === search);
        }

        if(search){
            houses = houses.filter(house =>
                house.name.includes(search),
            );
        }

        return houses;
    }

    */
}
