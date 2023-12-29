import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
      strict: true,
      strictQuery: true,
      selectPopulatedPaths: true,
      maxPoolSize: 10
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}