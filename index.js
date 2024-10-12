import dotenv from 'dotenv';
import express from 'express';
import userRoutes from './routes/user.js';
import { connectMongoDB } from './connection.js';
import { LogReqRes } from './middlewares/index.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connection
connectMongoDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(LogReqRes('log.txt'));

// Routes
app.get('/', (req, res) => {
    res.json({status: true, message: 'Api is responding'});
})
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});