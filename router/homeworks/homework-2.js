import { objectPerson } from '../../homework2/functions-homework2.js'
import { modal } from '../../src/function-controller/homework2/modal.js.js'

export default () => {
	const homework2 = `
						<form action="get">
						<label for="name">Nombre completo:</label> 
						<input type="text" id="name">
						<label for="codigo">Código:</label>
						<input type="text" id="codigo">
						<label for="note1">Nota #1:</label>
						<input type="text" id="note1">
						<label for="note2">Nota #2:</label>
						<input type="text" id="note2">
						<label for="note3">Nota #3:</label>
						<input type="text" id="note3">
						<button type="submit" id="submit">Ver Nota final</button>
						</form>
						`;
	const divElement = document.createElement('div');
	const insertModal = document.createElement('p');
  divElement.innerHTML = homework2;
  divElement.setAttribute('class', 'homework2')
	const name = divElement.querySelector('#name');
	const codigo = divElement.querySelector('#codigo');
	const note1 = divElement.querySelector('#note1');
	const note2 = divElement.querySelector('#note2');
	const note3 = divElement.querySelector('#note3');	
	divElement.querySelector('#submit').addEventListener('click', (e)=>{
		e.preventDefault();
		const savePerson = objectPerson(name.value, codigo.value, note1.value, note2.value, note3.value);
		divElement.appendChild(modal(savePerson.name, savePerson.codigo, savePerson.prom, insertModal));
	})
	return divElement;
}