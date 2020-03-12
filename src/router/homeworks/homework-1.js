import { suma, resta, division, multiplicacion } from '../../src/function-controller/homework1/functions-homework1.js.js'

export default () => {
  const homework1 = `
                    <label>a:</label>
                    <input id="a" type="text" placeholder="número #1">
                    <label>b:</label>
                    <input id="b" type="text" placeholder="número #2">
                    <button id="sumar"><b>sumar</b></button>
                    <button id="restar"><b>restar</b></button>
                    <button id="multiplicar"><b>multiplicar</b></button>
                    <button id="dividir"><b>dividir</b></button>
                    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = homework1;
  divElement.setAttribute('class', 'homeWork1')
  const a = divElement.querySelector('#a');
  const b = divElement.querySelector('#b');
  const result = document.createElement('p');
  result.setAttribute('class', 'result')
  divElement.querySelector('#sumar').addEventListener('click', ()=>{
    result.innerHTML = suma(a.value, b.value);
    divElement.appendChild(result);
  });
  divElement.querySelector('#restar').addEventListener('click', ()=>{
    result.innerHTML = resta(a.value, b.value);
    divElement.appendChild(result);
   });
   divElement.querySelector('#multiplicar').addEventListener('click', ()=>{
    result.innerHTML = multiplicacion(a.value, b.value);
    divElement.appendChild(result);
   });
   divElement.querySelector('#dividir').addEventListener('click', ()=>{
    result.innerHTML = division(a.value, b.value);
    divElement.appendChild(result);
   });
  return divElement;
}