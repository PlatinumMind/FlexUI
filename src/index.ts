import { render } from './templateing';

type CompononetType = 'page' | 'widget'

// exports
export * from './hooks/addState';
export * from './templateing';

export abstract class Widget {

    isFlexPage: CompononetType = 'page';

    onConnected() {}
    render() {}
}

export abstract class Page {
    path?: string;
    isFlexPage: CompononetType = 'page';

    onConnected() {}
    render() {}
}

export abstract class Manager {

    render(component: any, container: HTMLElement | Element) {
        render(component, container)
    }
}