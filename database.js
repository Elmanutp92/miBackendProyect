// Description: Conexión a la base de datos MongoDB.

const { MongoClient } = require('mongodb');

async function connectToMongoDB() {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Conectado a MongoDB');
        return client.db('Usuarios');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        throw error;
    }
}

module.exports = { connectToMongoDB };
