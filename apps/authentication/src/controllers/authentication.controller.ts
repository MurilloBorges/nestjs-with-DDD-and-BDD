import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthenticationService } from '../services/authentication.service';
import { CreateAuthenticationDto } from '../dto/create-authentication.dto';
import { UpdateAuthenticationDto } from '../dto/update-authentication.dto';
import ApiSinglenton from '../../../shared/src/utils/api.singleton';

@Controller(`${ApiSinglenton.Version}/auth`)
export class AuthenticationController {
    constructor(private readonly authenticationService: AuthenticationService) {}

    @MessagePattern('createAuthentication')
    create(@Payload() createAuthenticationDto: CreateAuthenticationDto) {
        return this.authenticationService.create(createAuthenticationDto);
    }

    @MessagePattern('findAllAuthentication')
    findAll() {
        return this.authenticationService.findAll();
    }

    @MessagePattern('findOneAuthentication')
    findOne(@Payload() id: number) {
        return this.authenticationService.findOne(id);
    }

    @MessagePattern('updateAuthentication')
    update(@Payload() updateAuthenticationDto: UpdateAuthenticationDto) {
        return this.authenticationService.update(
            updateAuthenticationDto.id,
            updateAuthenticationDto
        );
    }

    @MessagePattern('removeAuthentication')
    remove(@Payload() id: number) {
        return this.authenticationService.remove(id);
    }
}
