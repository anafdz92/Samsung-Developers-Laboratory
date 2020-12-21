"use strict";

const valBtn = document.querySelector('.valBtn-js');
const acountBtn = document.querySelector('.acountBtn-js');
const dayBtn = document.querySelector('.dayBtn-js');
let rangoInput = document.querySelector('.rango-js');
let acountNumber = document.querySelector('.acount-js');
let date = document.querySelector('.fecha-js');

const week =[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
]

function rangoCounter(ev){
    ev.preventDefault();
    alert(`Has valorado con ${rangoInput.value} puntos`)


};

function acountalert(ev){
    ev.preventDefault();
    alert(`Le informamos que su cuenta bancaria es ${acountNumber.value}`);
}

function dayAlert (ev){
    ev.preventDefault();
    //PLANTEAIENTO PARA PASAR  ACTUAL DATE A DÍA DE LA SEMANA
    let actualDate = date.value;
    let theDay = new Date(actualDate); 
    let dayIndex = theDay.getDay();
    let dayName = week[dayIndex]
    
    alert(`La fecha seleccionada es un ${dayName}`);

}

valBtn.addEventListener("click", rangoCounter);
acountBtn.addEventListener("click",acountalert );
dayBtn.addEventListener("click", dayAlert);