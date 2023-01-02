function header(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `    
        <header  >
          <div class="header">
          <img
            class="imagen-header"
            src="./img/programacion-2-e1551291144973.jpg"
            alt=""
          />
          <a href="#" class="contenedor-logo">
            <img
            class="logo"
            src="./img/logo-letras-blancas.png"
            />
          </a>
          <img
            class="imagen-header-perfil"
            src="./img/foto-perfil2.jpeg"
            alt=""
          />
          <div class="navbar">
            <nav id="nav">
              <ul >
                <li><a href="#about" class="nav" onclick="responsiveMenu()">Sobre mi</a></li>
                <li><a href="#proyectos" class="nav" onclick="responsiveMenu()">Portfolio</a></li>
                <li><a href="#contacto" class="nav" onclick="responsiveMenu()">Contacto</a></li>
              </ul>
            </nav>
            <div id="icono-nav" onclick="responsiveMenu()">
              <i class="fa-solid fa-bars icono-menu"></i>
            </div>
            </div>
        </div>
      </header> `;

  el.appendChild(componentEl);
}

function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}
