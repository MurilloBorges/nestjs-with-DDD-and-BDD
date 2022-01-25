import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @MessagePattern('createClient')
  create(@Payload() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @MessagePattern('findAllClient')
  findAll() {
    return this.clientService.findAll();
  }

  @MessagePattern('findOneClient')
  findOne(@Payload() id: number) {
    return this.clientService.findOne(id);
  }

  @MessagePattern('updateClient')
  update(@Payload() updateClientDto: UpdateClientDto) {
    return this.clientService.update(updateClientDto.id, updateClientDto);
  }

  @MessagePattern('removeClient')
  remove(@Payload() id: number) {
    return this.clientService.remove(id);
  }
}
