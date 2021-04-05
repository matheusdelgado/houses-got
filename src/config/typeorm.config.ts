import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'sql210.main-hosting.eu',
    port: 3306,
    username: 'u144364835_house_root ',
    password: 'j&v+VKX6n?',
    database: 'u144364835_houses_got',
    entities: [__dirname + '/../**///**.entity{.ts,.js}'],
    synchronize: true,
    ssl: false,
};