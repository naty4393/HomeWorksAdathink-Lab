import { component } from './components.js';

export const changeViews = (route) => {
    const i = route.split('/')[1];
    const container = document.getElementById('areaOfHomework');
    container.innerHTML = '';
  
    switch (route) {
      case '':
      case '#':
      case '#/':
      { return container.appendChild(component.home()); }
      case '#/tarea1':{ return container.appendChild(component.tarea1()); }
      case '#/tarea2':{ return container.appendChild(component.tarea2()); }
      default:
        return container.appendChild(component.error());
    }
  };
  