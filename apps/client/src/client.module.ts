import { Module } from '@nestjs/common';
import { ClientService } from './services/client.service';
import { ClientController } from './controllers/client.controller';
import { SharedModule } from '../shared/shared.module';
import HealthCheckModule from './healthcheck.module';

@Module({
    imports: [SharedModule, HealthCheckModule],
    controllers: [ClientController],
    providers: [ClientService],
})
export class ClientModule {}
