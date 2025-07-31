import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

console.log('📦 URI cargada del .env:', process.env.MONGODB_URI); // <--- debug

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB conectado con éxito');
  } catch (error) {
    console.error('❌ Error al conectar MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
