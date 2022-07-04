function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Page, fml } from 'flexui';
export default class App extends Page {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      count: 1,
      setCount: newState => {
        this.setCount(newState);
      }
    });
  }

  render() {
    return fml(`
            <div>
                <p>{{count}}</p>
                <button onclick="alert('hello world')">click this</button>
            </div>
        `, this.state);
  }

}

import { render } from 'flexui'; // no need to import App.js since its auto bundled

let app = new App();
render(app, document.getElementById('app'));
