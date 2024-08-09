import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI);
    console.log('DB connected Successfully');
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
