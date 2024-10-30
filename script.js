document.querySelectorAll(".mudar-formulario").forEach((elemento) => {
    elemento.addEventListener("click", () => {
      document.getElementById("login").classList.toggle("formulario-visivel");
      document.getElementById("registro").classList.toggle("formulario-visivel");
      document.getElementById("mensagemLogin").classList.toggle("formulario-visivel");
      document.getElementById("mensagemRegistro").classList.toggle("formulario-visivel");
    });
  });
  