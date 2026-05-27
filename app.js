fetch("jogos.json")
.then(r => r.json())
.then(data => {

  const box = document.getElementById("jogos");

  data.jogos.forEach(j => {

    box.innerHTML += `
      <div class="card">
        <h3>${j.nome}</h3>

        <img src="${j.capa}" width="120">

        <br><br>

        <a href="${j.download}" target="_blank">
          📥 Baixar
        </a>
      </div>
    `;
  });
});