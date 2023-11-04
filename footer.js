document.addEventListener("DOMContentLoaded", function() {
    var fecha = new Date();
    var ano = fecha.getFullYear();
    var mes = fecha.getMonth() + 1;
    var dia = fecha.getDate();
    var fechaActual = dia + '/' + mes + '/' + ano;
    var elementoFecha = document.getElementById("fecha-actualizacion");
    elementoFecha.innerHTML = 'Última actualización: ' + fechaActual;
  });