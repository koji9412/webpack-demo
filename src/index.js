import _ from 'lodash';
import { hello } from "./sub";

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    hello();
  
    return element;
  }
  
  document.body.appendChild(component());
