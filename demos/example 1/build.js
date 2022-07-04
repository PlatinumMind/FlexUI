function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  render
} = require('../../lib');

const Flex = require('../../lib');

let {
  Page,
  fml,
  addState
} = Flex;

class App extends Page {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      count: 1,
      setCount: newState => {
        console.log(newState);
        this.state.count = newState;
      },
      test: "test"
    });
  }

  render() {
    return fml(`
            <div>
                <span>{{count}}</span>
                <button onclick="alert('hello world')">click this</button>
            </div>
        `, this.state);
  }

}

let app = new App();
render(app, document.getElementById('app'));

