fetch("jogos.json")

.then(r => r.json())

.then(data => {

  const box = document.getElementById("jogos");

  data.jogos.forEach(j => {

    box.innerHTML += `

      <div class="card">

        <img src="${j.capa}">

        <div style="padding:10px">

          <h3>${j.nome}</h3>

          <a href="${j.download}" target="_blank">
            📥 Baixar
          </a>

        </div>

      </div>

    `;
  });
});

/* BUSCA */

document.getElementById("search")

.addEventListener("input", function(e){

  const value = e.target.value.toLowerCase();

  document.querySelectorAll(".card")

  .forEach(card => {

    const text = card.innerText.toLowerCase();

    card.style.display =
      text.includes(value)
      ? "block"
      : "none";

  });

});