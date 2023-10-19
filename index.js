// Capturando os elementos do arquivo HTML

const body = document.getElementsByTagName("body")[0] // tag body
const txtCourse = document.getElementById("course-title"); // titulo da pagina
const btnColor = document.getElementById("btn-color"); // botão de mudar cor

// const btnColor = document.querySelector("#btn-color")

// console.log(txtCourse);
// console.log(btnColor);

// adicionado o evento de clique ao botão
btnColor.addEventListener("click", () => {
  // gerando numeros aleatorios de 0 a 255 para usarmos no rgb
  let red = Math.random() * 255;
  let green = Math.random() * 255;
  let blue = Math.random() * 255;

  // calculo para descobrir se a cor é clara ou escura
  claridade = 0.299 * red + 0.587 * green + 0.114 * blue;

  // mudando a cor do site se a cor for clara
  if (claridade > 128) {
    body.style.backgroundColor = "#2f2f2f";
  } else {
    body.style.backgroundColor = "#ffffff";
  }

  // mudando a cor do texto
  txtCourse.style.color = `rgb(${red}, ${green}, ${blue})`;
});
