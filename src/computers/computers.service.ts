import { Injectable, Inject } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Model } from 'mongoose';
import { Computer } from './interfaces/computer.interface';

@Injectable()
export class ComputersService {
  constructor(
    @Inject('COMPUTER_MODEL') private readonly computerModel: Model<Computer>,
  ) {}

  async findAll(): Promise<Computer[]> {
    return this.computerModel.find().exec();
  }

  async findOne(id: string): Promise<Computer> {
    const computer = await this.computerModel.findById(id).exec();

    if (!computer) {
      throw new NotFoundException('Computer not found.');
    }

    return computer;
  }
}
