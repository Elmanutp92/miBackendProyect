// server.js

const express = require("express");
const { connectToMongoDB } = require("./database.js");
const { homeRouter } = require("./routes/home");

const app = express();
const port = 3000;

async function startServer() {
    try {
        const db = await connectToMongoDB();
        
        app.use("/", homeRouter(db));
        
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}

module.exports = { startServer };
