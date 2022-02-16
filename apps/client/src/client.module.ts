import { Module } from '@nestjs/common';
import { ClientService } from './services/client.service';
import { ClientController } from './controllers/client.controller';
import HealthCheckModule from './healthcheck.module';

@Module({
    imports: [HealthCheckModule],
    controllers: [ClientController],
    providers: [ClientService],
})
export class ClientModule {}
