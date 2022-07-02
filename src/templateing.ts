export function render(component: any, container: HTMLElement | Element) {
    container.innerHTML = '';
    container.appendChild((new component).render());
}

export function createContainer(selector: string) {
    if (selector.startsWith('.')) {
        return document.getElementsByClassName(selector)
    } else if (selector.startsWith('#')) {
        return document.getElementById(selector)
    } else {
        return document.querySelector(selector)
    }
}