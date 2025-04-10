// Seleccionar elementos del DOM
const canvas = document.getElementById("wallpaperCanvas");
const ctx = canvas.getContext("2d");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const typeSelector = document.getElementById("typeSelector");

// Ajustar tamaño del canvas al de la ventana
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Generar degradado aleatorio
function generateGradient() {
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, randomColor());
  gradient.addColorStop(1, randomColor());
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Generar patrones geométricos
function generatePattern() {
  ctx.fillStyle = randomColor();
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 100; i++) {
    ctx.fillStyle = randomColor();
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * 50,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}

// Generar ruido procedural
function generateNoise() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  for (let i = 0; i < imageData.data.length; i += 4) {
    const value = Math.random() * 255;
    imageData.data[i] = value;
    imageData.data[i + 1] = value;
    imageData.data[i + 2] = value;
    imageData.data[i + 3] = 255;
  }
  ctx.putImageData(imageData, 0, 0);
}

// Generar color aleatorio
function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

// Elegir tipo de fondo según la selección del usuario
function generateWallpaper() {
  const type = typeSelector.value;
  if (type === "gradient") generateGradient();
  else if (type === "pattern") generatePattern();
  else if (type === "noise") generateNoise();
}

// Descargar imagen
function downloadWallpaper() {
  const link = document.createElement("a");
  link.download = "wallpaper.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

// Eventos
window.addEventListener("resize", resizeCanvas);
generateBtn.addEventListener("click", generateWallpaper);
downloadBtn.addEventListener("click", downloadWallpaper);

typeSelector.addEventListener("change", generateWallpaper);

// Inicialización
resizeCanvas();
generateWallpaper();
