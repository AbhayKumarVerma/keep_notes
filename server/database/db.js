import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb://pranav955702:1234@mern-todo-shard-00-00.qrjqh.mongodb.net:27017,mern-todo-shard-00-01.qrjqh.mongodb.net:27017,mern-todo-shard-00-02.qrjqh.mongodb.net:27017/?ssl=true&replicaSet=atlas-681890-shard-0&authSource=admin&retryWrites=true&w=majority&appName=mern-todo`;
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;