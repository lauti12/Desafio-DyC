function headerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
       <header class="header">
        <div class="header-contenedor">
            <img src="/D-W-y-C-fotos/logo.png" alt="" class="header-logo">
            <div class="menu-hamburguesa">
                <button class="abre-ventana"></button>
            </div>
            <div class="header-accesos-directos">
                <a class="header-ac" href="/portfolio.html">Portfolio</a>
                <a class="header-ac" href="/servicios.html">Servicios</a>
                <a class="header-ac" href="/contacto.html">Contacto</a>
            </div>
            <div class="ventana">
                <button class="cierra-ventana"></button>
                <div class="ventana-contenido">
                    <a class="ventana-ac" href="/portfolio.html">Portfolio</a>
                    <a class="ventana-ac" href="/servicios.html">Servicios</a>
                    <a class="ventana-ac" href="/contacto.html">Contacto</a>
                </div>
            </div>
        </div>
    </header>
          `;

  el.appendChild(componentEl);

  const ventanaEl = document.querySelector(".ventana");
  const buttonAbrirEl = document.querySelector(".abre-ventana");
  const buttonCerrarEl = document.querySelector(".cierra-ventana");

  buttonAbrirEl.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });
  buttonCerrarEl.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });
}
