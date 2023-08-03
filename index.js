const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/public")));

// Função para buscar a imagem do gato
async function buscaDados() {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search");
    const imageUrl = response.data[0].url;
    console.log("Image URL:", imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("Error fetching cat image:", error.message);
    return null;
  }
}

// Rota para buscar a imagem do gato e retornar a URL como resposta
app.get("/getCatImage", async (req, res) => {
  const imageUrl = await buscaDados();
  res.send({ imageUrl });
});

// Rota para servir o arquivo index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
