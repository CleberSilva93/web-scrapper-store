import { Mongoose } from 'mongoose';
import { ComputerSchema } from './schemas/computer.schema';

export const computersProviders = [
  {
    provide: 'COMPUTER_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Computer', ComputerSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
