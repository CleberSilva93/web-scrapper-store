import { noteProps } from '../interfaces/computer.interface';

export class CreateComputerDto {
  readonly groupBy: string;
  readonly link: string;
  readonly updateAt: Date;
  readonly notes: noteProps[];
}
