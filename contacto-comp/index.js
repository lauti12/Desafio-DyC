function contactComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
   <section class="contacto">
        <h2 class="contacto-titulo">Escribime</h2>
        <form action="" class="contacto-form">
            <label class="contacto-label-1">
                <h3 class="contacto-label-titulo">Nombre</h3>
                <input type="text" class="contacto-input-1" placeholder="Tu nombre">
            </label>
            <label class="contacto-label-2">
                <h3 class="contacto-label-titulo">Email</h3>
                <input type="text" class="contacto-input-2" placeholder="tu@mail.com">
            </label>
            <label class="contacto-label-3">
                <h3 class="contacto-label-titulo">Mensaje</h3>
                <textarea class="contacto-input-3"></textarea>
            </label>
            <div class="contacto-contenedor-boton">
                <button class="contacto-boton">Enviar<img src="/D-W-y-C-fotos/send.svg" alt="" class="contacto-send"></button>
            </div>
        </form>
    </section>
      `;

  const form = componentEl.querySelector(".contacto-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "lautarogomez68@gmail.com",
        message: "mensaje a enviar",
      }),
    });
  });

  el.appendChild(componentEl);
}
