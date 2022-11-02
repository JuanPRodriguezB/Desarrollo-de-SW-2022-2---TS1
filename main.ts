import {Serie} from './serie.js';
import {series} from './data.js';

let seriesTabla: HTMLElement = document.getElementById("series")!;

mostrarTablaSeries(series);

function mostrarTablaSeries(series: Serie[]):void{
    let tbodySerie = document.createElement("tbody");
    for (let serie of series) {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<td>${serie.id}</td>
        <td>${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        tbodySerie.appendChild(trElement);
    }
    seriesTabla.appendChild(tbodySerie);
}