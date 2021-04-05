import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '213.190.6.64',
    port: 3306,
    username: 'u144364835_house_root',
    password: "F3d4glHbmrv",
    database: 'u144364835_houses_got',
    entities: [__dirname + '/../**///**.entity{.ts,.js}'],
    synchronize: false,
    ssl: false,
};