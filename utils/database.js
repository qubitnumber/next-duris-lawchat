import mongoose from 'mongoose';

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "durislaw",
    })

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}