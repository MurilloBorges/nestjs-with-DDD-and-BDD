import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';
import Singlenton from '../../../shared/src/utils/singleton';

const instance: Singlenton = Singlenton.Instance;

@Controller(`${instance.ApiVersion}/healthcheck`)
class HealthCheckController {
    constructor(private health: HealthCheckService) {}

    @Get()
    @HealthCheck()
    check() {
        return this.health.check([]);
    }
}

export default HealthCheckController;
