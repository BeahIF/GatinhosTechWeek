// main.js
async function loadCatImage() {
    try {
      const response = await fetch("/getCatImage");
      const data = await response.json();
  
      // Exibe a imagem na página
      const catImage = document.getElementById("catImage");
      catImage.src = data.imageUrl;
    } catch (error) {
      console.error("Error loading cat image:", error.message);
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadCatImage);
  