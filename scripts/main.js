import { series } from './data.js';
var SeriesTabla = document.getElementById('series');
mostrarTablaSeries();
function mostrarTablaSeries() {
    var tbodySerie = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n        <td>".concat(serie.id, "</td>\n        <td>").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        tbodySerie.appendChild(trElement);
    }
    SeriesTabla.appendChild(tbodySerie);
}
