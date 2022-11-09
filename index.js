var fieldsCollections = {
  title: "",
  description: "",
  url: "",
  image: "",
};

function addWorkCard(params = {}) {
  const template = document.querySelector("#portfolio-template");
  const container = document.querySelector(".portfolio");

  template.content.querySelector(".portfolio-card__title").textContent =
    params.title;
  template.content.querySelector(".portfolio-card__descripcion").textContent =
    params.description;
  template.content.querySelector(".portfolio-card__imagen").src = params.image;
  template.content.querySelector(".portfolio-card-link").href = params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/h3ja1mbjit0x/environments/master/entries?access_token=YD4hrqXxqVANztfgu21mi_MgBPMcVlvhFba_uWQyDf0&content_type=work"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const imagenes = data.includes.Asset.map((item) => {
        return item.fields.file.url;
      });
      fieldsCollections = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
          url: item.fields.url,
        };
      });

      for (var i = 0; i < fieldsCollections.length; i++) {
        fieldsCollections[i].image = imagenes[i];
      }
      return fieldsCollections;
    });
}

function main() {
  // const headerContainer = document.querySelector(".header-cont");
  // header(headerContainer);

  getWorks().then(function (works) {
    for (const w of works) {
      addWorkCard(w);
    }
  });

  const formContainer = document.querySelector(".contacto-cont");
  contacto(formContainer);

  const footerContainer = document.querySelector(".footer-cont");
  footer(footerContainer);

  gsap.from(".hola", {
    duration: 1.5,
    delay: 0.7,
    opacity: 0,
    x: -600,
    // ease: Expo.easeInOut,
  });
  gsap.from(".welcome__subtitulo", {
    duration: 1.5,
    delay: 1.1,
    opacity: 0,
    y: -600,
    // ease: Expo.easeInOut,
  });
  gsap.from(".rol", {
    duration: 1.5,
    delay: 0.9,
    opacity: 0,
    x: 600,
    // ease: Expo.easeInOut,
  });
  gsap.from(".boton-descargar-CV", {
    duration: 1.5,
    delay: 1.3,
    opacity: 0,
    x: -250,
    ease: "bounce.out",
  });
  gsap.from(".linkedin", {
    duration: 1.5,
    delay: 1.5,
    opacity: 0,
    x: -400,
    // ease: Expo.easeInOut,
  });
  gsap.from(".github", {
    duration: 1.5,
    delay: 1.6,
    opacity: 0,
    x: 400,
    // ease: Expo.easeInOut,
  });
  gsap.from(".imagen-header", {
    duration: 1.5,
    delay: 1.6,
    opacity: 0,
    y: -400,
    // ease: Expo.easeInOut,
  });
  gsap.from(".imagen-header-perfil", {
    duration: 1.5,
    delay: 1.7,
    opacity: 0,
    y: -400,
    // ease: Expo.easeInOut,
  });

  // ----------------------------------SCROLL----------------------------------
  gsap.registerPlugin(ScrollTrigger);

  const welcomeSection = document.querySelector(".welcome");
  const presentacionImagen = document.querySelector(".presentacion__imagen");
  const presentacionNombre = document.querySelector(".presentacion__nombre");
  const presentacionTexto = document.querySelector(".presentacion__texto");
  const presentacionSection = document.querySelector(".presentacion");
  const proyectosTitulo = document.querySelector(".proyectos__title");
  const proyectosCard = document.querySelector(".portfolio");
  const proyectosSection = document.querySelector(".proyectos");
  const contactoForm = document.querySelector(".contacto-cont");
  const footerSection = document.querySelector(".footer-cont");

  const tl = gsap
    .timeline()
    .to(welcomeSection, {
      top: "-100vh",
      duration: 2,
    })
    .from(
      presentacionImagen,
      {
        duration: 1.5,
        opacity: 0,
        y: 100,
      },
      "-=1.3"
    )
    .from(
      presentacionNombre,
      {
        duration: 1.5,
        opacity: 0,
        y: 100,
      },
      "-=1.6"
    )
    .from(
      presentacionTexto,
      {
        duration: 1.5,
        opacity: 0,
        y: 100,
      },
      "-=1.3"
    )
    .to(
      presentacionSection,
      {
        left: "100vw",
        delay: 1,
        duration: 1.5,
        rotation: 180,
      },
      "-=0.7"
    )
    .from(
      proyectosTitulo,
      {
        duration: 1.5,
        opacity: 0,
        x: -600,
      },
      "-=0.8"
    )
    .from(
      proyectosCard,
      {
        duration: 1.5,
        opacity: 0,
        y: 100,
      },
      "-=1.5"
    )
    .to(proyectosSection, {
      top: "-220vh",
      delay: 0.7,
      duration: 2,
    });

  // const tl = gsap
  //   .timeline()
  //   .from(presentacionImagen, { duration: 2, y: 200 })
  //   .from(presentacionNombre, { duration: 2, y: 200 }, "-=2")
  //   .from(presentacionTexto, { duration: 2, y: 200 }, "-=2")
  //   .from(proyectosTitulo, { duration: 2, y: 200 })
  //   .from(proyectosCard, { duration: 2, y: 200 })
  //   .from(contactoSection, { duration: 2, y: 100 });

  ScrollTrigger.create({
    animation: tl,
    trigger: ".contenedor-page",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
  });
}

main();