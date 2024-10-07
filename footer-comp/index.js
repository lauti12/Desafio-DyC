function footerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
      <footer class="footer">
        <img src="D-W-y-C-fotos/logo.png" alt="" class="footer-logo">
        <div class="footer-accesos-directos">
            <address class="address">
                <img src="D-W-y-C-fotos/home.svg" alt="" class="footer-logo-address">
                Home
            </address>
            <address class="address">
                <img src="D-W-y-C-fotos/phone.svg" alt="" class="footer-logo-address">
                Servicios
            </address>
            <address class="address">
                <img src="D-W-y-C-fotos/user.svg" alt="" class="footer-logo-address">
                Contacto
            </address>
        </div>
        <div class="footer-redes">
            <address class="footer-redes-address">
                <img src="D-W-y-C-fotos/linkedin-svgrepo-com (1) 1.svg" alt="" class="footer-logo-redes">
            </address>
            <address class="footer-redes-address">
                <img  src="D-W-y-C-fotos/github-svgrepo-com 1.svg" alt="" class="footer-logo-redes">
            </address>
            <address class="footer-redes-address">
                <img  src="D-W-y-C-fotos/twitter.svg" alt="" class="footer-logo-redes">
            </address>
        </div>
        <div class="footer-copyright">
            <p class="copyright">©2022 - https://apx.school</p>
        </div>
    </footer>
        `;

  el.appendChild(componentEl);
}
