function header(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `    
  <header class="header">
        <a href="./index.html">
          <img class="header__imagen" src="./img/logo.png" alt="logo" />
        </a>
        
          <div class="header__button-hamburger--abre-ventana">
            <div class="button-hamburger__capa"></div>
            <div class="button-hamburger__capa"></div>
            <div class="button-hamburger__capa"></div>
          </div>
          <div class="header__menu">
            <div class="header__menu-opciones">
              <a href="./index.html">Inicio</a>
            </div>  
            <div class="header__menu-opciones">
              <a href="#about">Sobre mí</a>
            </div>  
            <div class="header__menu-opciones">
              <a href="#proyectos">Proyectos</a>
            </div>  
            <div class="header__menu-opciones">
              <a href="#contacto">Contacto</a>
            </div>  
          </div>
          <div class="header__ventana">
            <span class="ventana__cierra-ventana">X</span>
            <div class="ventana__contenido">
            <div class="header__menu-opciones">
            <a href="./index.html">Inicio</a>
          </div>  
          <div class="header__menu-opciones">
            <a href="./index.html#about" onclick="location.reload()">Sobre mí</a>
          </div>  
          <div class="header__menu-opciones">
            <a href="#proyectos" onclick="location.reload()">Proyectos</a>
          </div>  
          <div class="header__menu-opciones">
            <a href="#contacto" onclick="location.reload()">Contacto</a>
          </div>  
            </div>
          </div>
  </header> `;

  const botonHamburguesaEl = componentEl.querySelector(
    ".header__button-hamburger--abre-ventana"
  );
  const botonCerrarVentanaEl = componentEl.querySelector(
    ".ventana__cierra-ventana"
  );

  const ventanaEl = componentEl.querySelector(".header__ventana");

  botonHamburguesaEl.addEventListener("click", function () {
    ventanaEl.style.display = "inherit";
  });
  botonCerrarVentanaEl.addEventListener("click", function () {
    ventanaEl.style.display = "";
  });

  el.appendChild(componentEl);

  // TweenMax.from(".header__imagen", 1, {
  //   opacity: 0,
  //   x: -20,
  //   ease: Expo.easeInOut,
  // });
  // TweenMax.staggerFrom(
  //   ".header__menu .header__menu-opciones",
  //   1,
  //   {
  //     opacity: 0,
  //     x: -20,
  //     ease: Power3.easeInOut,
  //   },
  //   0.1
  // );
  // TweenMax.staggerFrom(
  //   ".button-hamburger__capa",
  //   1,
  //   {
  //     opacity: 0,
  //     x: 40,
  //     ease: Power3.easeInOut,
  //   },
  //   0.1
  // );
}
