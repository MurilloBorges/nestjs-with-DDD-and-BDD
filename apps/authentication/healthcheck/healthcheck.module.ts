import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import HealthCheckController from './healthcheck.controller';

@Module({
    imports: [TerminusModule],
    controllers: [HealthCheckController],
    providers: [],
})
export default class HealthModule {}
