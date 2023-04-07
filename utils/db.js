import mongoose from 'mongoose';

const connection = {
  isConnected: false
};

export async function connectDB() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);

    console.log('new connection');

    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

export async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected in dev mode');
    }
  }
}