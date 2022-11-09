function footer(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `    
  <footer class="footer">
        <a href="./index.html">
          <img src="./img/logo.png" class="footer__imagen" />
        </a>
        <div class="footer__redes-cont">
         
          <div class="footer__redes">
          <a class="footer__redes-link" href="https://www.linkedin.com/feed/" target="_blank">            
              <img src="./img/linkedin.png" class="logo-linkedin" />
              <span class="footer__redes-texto">Linkedin</span>
            </a>
          </div>
          <div class="footer__redes">
          <a class="footer__redes-link" href="https://github.com/Francisco-B07" target="_blank">
              <img src="./img/github.svg" class="logo-github" />
              <span class="footer__redes-texto">Github</span>
            </a>
          </div>
        </div>
      </footer> `;

  el.appendChild(componentEl);
}
