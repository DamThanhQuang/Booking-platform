import "reflect-metadata";
import { DataSource } from "typeorm";
import { typeormConfig } from "./typeorm.config";
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource(typeormConfig());