function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem black
    img.setAttribute('src', './assets/avatar_black.png')
  } else {
    img.setAttribute('src', './assets/avatar.png')
    // se estiver sem o light mode, manter a imagem normal
  }
}
