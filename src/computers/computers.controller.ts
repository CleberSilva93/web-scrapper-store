import { Controller, Get, Param } from '@nestjs/common';
import { ComputersService } from './computers.service';
import { Computer } from './interfaces/computer.interface';

@Controller('computers')
export class ComputersController {
  constructor(private readonly computersService: ComputersService) {}

  @Get()
  async findAll(): Promise<Computer[]> {
    return this.computersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Computer> {
    return this.computersService.findOne(id);
  }
}
