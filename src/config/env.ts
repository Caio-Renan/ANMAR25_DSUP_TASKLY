import dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'development';

const envFile =
  environment === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });

export const config = {
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT || 3000,
};
