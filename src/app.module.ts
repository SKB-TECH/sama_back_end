import {
  Logger,
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Router } from 'express';
import {
  HelmetHpkpMiddleware,
  HelmetMiddleware,
} from '@nest-middlewares/helmet';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonModule } from './don/don.module';
import { MeddecinModule } from './meddecin/meddecin.module';
import { RdvModule } from './rdv/rdv.module';
import * as dotenv from 'dotenv';
import { MailerModule } from '@nestjs-modules/mailer';
import { UserModule } from './user/user.module';

dotenv.config();
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_API_KEY,
        },
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entities{.ts,.js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      autoLoadEntities: true,
      synchronize: true,
    }),
    DonModule,
    MeddecinModule,
    RdvModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
