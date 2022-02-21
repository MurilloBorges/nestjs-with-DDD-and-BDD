import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';
import ApiSinglenton from '../../../shared/src/utils/api.singleton';

@Controller(`${ApiSinglenton.Version}/healthcheck`)
class HealthCheckController {
    constructor(private health: HealthCheckService) {}

    @Get()
    @HealthCheck()
    check() {
        return this.health.check([]);
    }
}

export default HealthCheckController;
