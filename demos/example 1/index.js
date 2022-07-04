const { render } = require('../../lib');
const Flex = require('../../lib');
let { Page, fml, addState } = Flex;

class App extends Page {

    state = {
        count: 1,
        setCount : (newState) => {
            console.log(newState);
            this.state.count = newState; 
        },
        test: "test"
    }

    render() {
        return fml(`
            <div>
                <span>{{count}}</span>
                <button onclick="alert('hello world')">click this</button>
            </div>
        `, this.state)
    }
}

let app = new App();
render(app, document.getElementById('app'));