function addPortfolioCard(params = {}) {
  const template = document.querySelector("#portfolio-template");
  const container = document.querySelector(".trabajos");
  template.content.querySelector(".titulo-card-1").textContent = params.title1;
  template.content.querySelector(".titulo-card-2").textContent = params.title2;
  template.content.querySelector(".titulo-card-3").textContent = params.title3;
  template.content.querySelector(".imagen-card-1").src = params.image1;
  template.content.querySelector(".imagen-card-2").src = params.image2;
  template.content.querySelector(".imagen-card-3").src = params.image3;
  template.content.querySelector(".contenido-card-1").textContent =
    params.text1;
  template.content.querySelector(".contenido-card-2").textContent =
    params.text2;
  template.content.querySelector(".contenido-card-3").textContent =
    params.text3;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getPortfolioContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/tb2fppd2gavk/environments/master/entries?access_token=GtXzF0sQSiqDZae_ULge1Eqhy22UzqnkoswSz40SeBE&content_type=desafioWyCTrabajos"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return {
        title1: data.items[0].fields.titulo1,
        title2: data.items[0].fields.titulo2,
        title3: data.items[0].fields.titulo3,
        image1: data.includes.Asset[0].fields.file.url,
        image2: data.includes.Asset[1].fields.file.url,
        image3: data.includes.Asset[2].fields.file.url,
        text1: data.items[0].fields.contenido,
        text2: data.items[0].fields.contenido,
        text3: data.items[0].fields.contenido,
      };
    });
}

function main() {
  getPortfolioContent().then(function (p) {
    {
      addPortfolioCard(p);
    }
  });

  footerComponent(document.querySelector(".footer-cont"));
  headerComponent(document.querySelector(".header-cont"));
}

main();
