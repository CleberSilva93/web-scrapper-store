import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      mongoose.set('strictQuery', false);
      return await mongoose.connect(process.env.MONGO_URL);
    },
  },
];
