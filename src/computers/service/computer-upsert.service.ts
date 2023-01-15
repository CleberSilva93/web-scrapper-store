import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateComputerDto } from '../dto/create-computer.dto';
import { Computer } from '../interfaces/computer.interface';

@Injectable()
export class ComputerUpsertService {
  constructor(
    @Inject('COMPUTER_MODEL') private readonly computerModel: Model<Computer>,
  ) {}

  async upsert(createComputerDto: CreateComputerDto) {
    const findComputers = await this.computerModel
      .findOne({ link: createComputerDto.link })
      .exec();

    if (findComputers) {
      await this.computerModel
        .updateOne({
          link: createComputerDto.link,
          createComputerDto,
        })
        .exec();

      return;
    }
    const orderNotesByPrice = createComputerDto.notes.sort(
      (note, noteCompare) =>
        +note.price.replace('$', '') - +noteCompare.price.replace('$', ''),
    );
    await this.computerModel.create({
      link: createComputerDto.link,
      groupBy: createComputerDto.groupBy,
      updateAt: createComputerDto.updateAt,
      notes: orderNotesByPrice,
    });
  }
}
