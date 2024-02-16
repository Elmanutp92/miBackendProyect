const express = require("express");
const router = express.Router();

function homeRouter(db) {
  router.get("/usuarios", async (req, res) => {
    try {
      const usersCollection = db.collection("users");
      const allUsers = await usersCollection.find({}).toArray();
      res.json(allUsers);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ error: "Error al obtener usuarios" });
    }
  });

  router.get("/usuarios/:id", async (req, res) => {
    const userID = req.params.id;

    try {
      const usersCollection = db.collection("users");
      const allUsers = await usersCollection.find({}).toArray();

      const user = allUsers.find((user) => user._id.toString() === userID);

      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "Usuario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al obtener usuario" });
    }
});

  return router;
}

module.exports = { homeRouter };
