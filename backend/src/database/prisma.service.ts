import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import * as mariadb from 'mariadb';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const connectionString = process.env.DATABASE_URL!.replace(
      'mysql://',
      'mariadb://',
    );

    const pool = mariadb.createPool(connectionString);
    const adapter = new PrismaMariaDb(pool as any);

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
