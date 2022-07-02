export function addState(initialState: any) {
  return (target: any, key: string) => {
    target[key] = initialState;
    target[`set${key.replace(/^\w/, (c: string) => c.toUpperCase())}`] = (newState: any) => target[key] = newState;
  };
}