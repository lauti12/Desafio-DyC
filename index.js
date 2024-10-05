function addHomeContent(params = {}) {
  const template = document.querySelector("#home-template");
  const container = document.querySelector(".home");
  template.content.querySelector(".titulo-bienvenida").textContent =
    params.title;
  template.content.querySelector(".subtitulo-bienvenida").textContent =
    params.subtitle;
  template.content.querySelector(".imagen-bienvenida").src = params.imageHome;
  template.content.querySelector(".presentacion-titulo").textContent =
    params.subtitle;
  template.content.querySelector(".presentacion-contenido").textContent =
    params.text;
  template.content.querySelector(".presentacion-img").src =
    params.imagePresentation;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getHomeContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/tb2fppd2gavk/environments/master/entries?access_token=GtXzF0sQSiqDZae_ULge1Eqhy22UzqnkoswSz40SeBE&content_type=desafioWyCHome"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return {
        title: data.items[0].fields.titulo,
        subtitle: data.items[0].fields.subtitulo,
        imageHome: data.includes.Asset[0].fields.file.url,
        text: data.items[0].fields.contenido,
        imagePresentation: data.includes.Asset[1].fields.file.url,
      };
    });
}

function main() {
  getHomeContent().then(function (home) {
    {
      addHomeContent(home);
    }
  });

  contactComponent(document.querySelector(".contacto-cont"));
  footerComponent(document.querySelector(".footer-cont"));
  headerComponent(document.querySelector(".header-cont"));
}

main();
