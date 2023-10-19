// Capturando as variaveis do HTML

const body = document.getElementsByTagName("body")[0]; // tag body
const nameInput = document.getElementById("input-name"); // input do nome
const emailInput = document.getElementById("input-email"); // input do email
const btnEnviar = document.getElementById("send"); // botão de enviar
const values = document.getElementById("values"); // campo contendo os cards no HTML

// adicionado o evento de clique ao botão
btnEnviar.addEventListener("click", () => {
  let nameValue = nameInput.value; // extraindo o valor do input de nome
  let emailValue = emailInput.value; // extraindo o valor do input de nome

  // verificando se todos os campos estão preenchidos
  if (nameValue == "" || emailValue == "") {
    window.alert("insira todos os valores");
    return;
  }

  // criando o HTML do novo card
  let newCard = `
        <article class="card card-info">
            <p>${nameValue}</p>
            <p>${emailValue}</p>
        </article>
    `;

  // limpando o valor dos inputs no HTML
  nameInput.value = "";
  emailInput.value = "";

  // adicionando nosso card ao HTML
  values.innerHTML += newCard;
});

values.addEventListener("click", (card) => {
  // transformando a array DOM em uma array javascript
  let classes = [...card.target.classList];

  // removendo o card que foi clicado
  if (classes.includes("card-info")) {
    card.target.remove();
  }
});
