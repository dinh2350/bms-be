import * as dotenv from 'dotenv';
dotenv.config();
export const SERVER_PORT: number = +process.env.SERVER_PORT;
export const DB_TYPE: string = process.env.DB_TYPE;
export const DB_HOST: string = process.env.DB_HOST;
export const DB_PORT: number = +process.env.DB_PORT;
export const DB_USERNAME: string = process.env.DB_USERNAME;
export const DB_PASSWORD: string = process.env.DB_PASSWORD;
export const DB_DATABASE: string = process.env.DB_DATABASE;
