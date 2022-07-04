import { Page, fml } from 'flexui'

export default class App extends Page {
    
    state = {
        count: 1,
        setCount: newState => {
           this.setCount(newState);
        }
    }
    
    render() {
        return fml(`
            <div>
                <p>{{count}}</p>
                <button onclick="alert('hello world')">click this</button>
            </div>
        `, this.state)
    }
}