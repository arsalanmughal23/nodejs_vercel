require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/user');
const { connectMongoDB } = require('./connection');
const { LogReqRes } = require('./middlewares');

const app = express();
const PORT = process.env.PORT || 5000;

// Connection
connectMongoDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(LogReqRes('log.txt'));

// Routes
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});