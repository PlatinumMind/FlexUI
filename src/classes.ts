import { render } from "./templateing";

type CompononetType = 'page' | 'widget' | boolean

export abstract class Widget {

    isFlexPage: CompononetType = 'page';

    onConnected() {}
    render() {}
}

export abstract class Page {
    path?: string;
    isFlexPage: CompononetType = true;
    nodeType = 1;
    onConnected() {}
    render() {}
}

export abstract class Manager {

    render(component: any, container: HTMLElement | Element) {
        render(component, container)
    }
}