document.addEventListener("DOMContentLoaded", function () {
  const nombrePizzaInput = document.getElementById("nombre-pizza");
  const costoPizzaInput = document.getElementById("costo-pizza");
  const recibirPedidoButton = document.getElementById("recibir-pedido");
  const pedidoList = document.getElementById("pedido-list");

  recibirPedidoButton.addEventListener("click", function () {
    const nombrePizza = nombrePizzaInput.value.trim();
    const costoPizza = costoPizzaInput.value.trim();

    if (nombrePizza === "" || costoPizza === "") {
      alert("Por favor, complete ambos campos.");
      return;
    }

    const pedidoCard = document.createElement("div");
    pedidoCard.classList.add("pedido-card");
    pedidoCard.innerHTML = `
        <h3>${nombrePizza}</h3>
        <p>Costo: $${costoPizza}</p>
`;
    pedidoList.appendChild(pedidoCard);

    nombrePizzaInput.value = "";
    costoPizzaInput.value = "";
  });
});
