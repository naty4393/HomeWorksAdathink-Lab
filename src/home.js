export default () => {
  const home = `
              <h1>Bienvenido a revisar algunas de las tareas realizadas para el Bootcam de <b>Adathink Lab</b></h1>
              <p>La única condición es que me comentes con un feedback ya sea positivo o negavito, igual se aprecia</p>
            `
  const divElement = document.createElement('div');
  divElement.innerHTML = home;
  divElement.setAttribute('class', 'title');
  return divElement;
}