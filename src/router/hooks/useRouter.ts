export function useRouter(constructor: Function) {
    constructor.prototype['renderWithRouter'] = function (routes: Array<any>, countainer: HTMLElement | Element) {
        routes.forEach(route => {

            if (document.location.href == route.path) {
                constructor.prototype.render(route.component, countainer);
            }
        })
    }
}
    