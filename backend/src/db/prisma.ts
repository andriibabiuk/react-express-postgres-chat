import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { config } from 'dotenv';
import { existsSync } from 'fs';
import path from 'path';

const envPath = existsSync(path.resolve(process.cwd(), '.env'))
	? path.resolve(process.cwd(), '.env')
	: path.resolve(process.cwd(), '../.env');

config({ path: envPath });

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export default prisma;
