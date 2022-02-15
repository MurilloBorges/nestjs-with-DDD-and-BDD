import { Module } from '@nestjs/common';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationController } from './controllers/authentication.controller';
import { SharedModule } from '../../shared/src/shared.module';
import HealthModule from './healthcheck.module';

@Module({
    imports: [SharedModule, HealthModule],
    controllers: [AuthenticationController],
    providers: [AuthenticationService],
})
export class AuthenticationModule {

}
