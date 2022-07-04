// import { h, init } from 'snabbdom';
// import { propsModule } from 'snabbdom/build/modules/props';
// import { eventListenersModule } from 'snabbdom/build/modules/eventlisteners';

// const reconcile = init([propsModule, eventListenersModule]);

// let rootVNode: any;


// export function createContainer(selector: string) {
//     if (selector.startsWith('.')) {
//         return document.getElementsByClassName(selector)
//     } else if (selector.startsWith('#')) {
//         return document.getElementById(selector)
//     } else {
//         return document.querySelector(selector)
//     }
// }



// export const createElement = (type: any, props: any = {}, ...children: any[]) => {
//     // flatten the children
//     // this to make todos.map(todo => <p>{todo}</p>) work in jsx
//     // [['idly'], ['dosa', 'vada']] -> ['idly', 'dosa', 'vada']
//     children = children.flat();

//     // if type is a Class then
//     // 1. create a instance of the Class
//     // 2. call the render method on the Class instance
//     if (type.prototype && type.prototype.isQndReactClassComponent) {
//         const componentInstance = new type(props);

//         // remember the current vNode instance
//         componentInstance.__vNode = componentInstance.render();

//         // add hook to snabbdom virtual node to know whether it was added to the actual DOM
//         componentInstance.__vNode.data.hook = {
//             create: () => {
//                 componentInstance.onConnect()
//             }
//         }

//         return componentInstance.__vNode;
//     }
//     // if type is a function then call it and return it's value
//     if (typeof (type) == 'function') {
//         return type(props);
//     }

//     props = props || {};
//     let dataProps: any = {};
//     let eventProps: any = {};

//     // This is to seperate out the text attributes and event listener attributes
//     for (let propKey in props) {
//         // event props always startwith on eg. onClick, onChange etc.
//         if (propKey.startsWith('on')) {
//             // onClick -> click
//             const event = propKey.substring(2).toLowerCase();

//             eventProps[event] = props[propKey];
//         }
//         else {
//             dataProps[propKey] = props[propKey];
//         }
//     }
//     return h(type, { props: dataProps, on: eventProps }, children);
// }
// export function __update(componentInstance: any) {
//     const oldVNode = componentInstance.__vNode;
//     // find the updated DOM node by calling the render method
//     const newVNode = componentInstance.render();

//     // update the __vNode property with updated __vNode
//     componentInstance.__vNode = reconcile(oldVNode, newVNode);
// }

// interface app {
//     elem: any
// }

// export function render(appInfo: app, container: HTMLElement | Element) {

//     // if (rootVNode == null) {
//     //     rootVNode = container;
//     // }

//     // rootVNode = reconcile(container, appInfo.elem);

//     container.innerHTML = appInfo.elem;
// }

// export function Fragment() {
//     return h('div', {});
// }


export let fml = function (this: any, template: string, data: any) {
        return template.replace(/{{(.*?)}}/g, (match) => {
		return data[match.split(/{{|}}/).filter(Boolean)[0]]
	})
}

export function render(component: any, container: HTMLElement | Element) {
    container.innerHTML = component.render()
}