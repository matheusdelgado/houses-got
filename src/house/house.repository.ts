import { NotFoundException } from '@nestjs/common';
import { isEmpty } from 'class-validator';
import { EntityRepository, Repository } from 'typeorm';
import { CreateHouseDto } from './dto/create-house.dto';
import { GetHousesFilterDto } from './dto/get-houses-filter.dto';
import { House } from './house.entity';

@EntityRepository(House)
export class HouseRepository extends Repository<House> {

    async getHouse(filterDto: GetHousesFilterDto): Promise<House[]> {
        const { search } = filterDto;
        const query = this.createQueryBuilder('house');

        if(search){
            query.andWhere('(house.name LIKE :search)', {search: `%${search}%`});
        }

        const houses = await query.getMany();
        return houses;
    }

    async createHouse(createHouseDto: CreateHouseDto){
        const {name, region, fundation_year, current_lord} = createHouseDto;

        const house = new House();
        house.name = name;
        house.region = region;
        house.fundation_year = fundation_year;
        house.current_lord = current_lord;

        await house.save();
        
        return house;
    }
}