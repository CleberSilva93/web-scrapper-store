import { Document } from 'mongoose';

export type noteProps = {
  title: string;
  price: string;
  description: string;
  reviews: string;
  rating: string;
};

export interface Computer extends Document {
  readonly groupBy: string;
  readonly link: string;
  readonly updateAt: Date;
  readonly notes: noteProps[];
}
