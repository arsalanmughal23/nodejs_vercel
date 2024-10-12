import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

async function connectMongoDB() {
    
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_HOST = process.env.DB_HOST;
    const DB_PORT = process.env.DB_PORT;
    const DB_NAME = process.env.DB_NAME;
    let connectionString = null;

    if(process.env.APP_ENV == 'local') {
        connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    } else {
        connectionString = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
    }

    return mongoose.connect(connectionString)
        .then(() => console.log('MongoDB Connected'))
        .catch((err) => console.log('MongoDB Connection Failed', err));
}

export {
    connectMongoDB,
};