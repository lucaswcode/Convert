// Contação das moedas.
const USD = 5.48;
const EUR = 6.44;
const GBP = 7.52;
const KWD = 17.92;
const CNY = 0.72;
const JPY = 0.038;

// Obtendo os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturando o evento de submit do formulário.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
    case "KWD":
      convertCurrency(amount.value, KWD, "ك");
      break;
    case "CNY":
      convertCurrency(amount.value, CNY, "¥");
      break;
    case "JPY":
      convertCurrency(amount.value, JPY, "¥");
      break;
  }
});

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calcula o total.
    let total = amount * price;

    // Verifica se o resultado não é um número.
    if (isNaN(total)) {
      alert("Por favor, digite o valor corretamente.");
    }
    total = formatCurrencyBRL(total).replace("R$", "");

    // Exibe o resultado total.
    result.textContent = `${total} Reais`;

    // Aplica a classe que exibe o footer com o resultado.
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-list");
    console.log(error);
    alert("Não foi possível converter. Tente novamente...");
  }
}

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value) {
  // Converte para número, assim é possível utilizar o toLocaleString, e formatar para o padrão Brasileiro.
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
