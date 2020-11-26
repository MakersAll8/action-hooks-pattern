import store from "../store";

const log = (name, fn) => (...args) => {
  console.log(`Action: ${name}`, args);
  return fn(...args);
};

export const useCount = () => {
  const [state] = store.useStore();
  return state.count;
};

export const useIncrement = () => {
  const [, setState] = store.useStore();
  return log("increment", (step = 1) => {
    setState((old) => ({
      ...old,
      count: old.count + step
    }));
  });
};

export const useDecrement = () => {
  const [, setState] = store.useStore();
  return () => {
    setState((old) => ({
      ...old,
      count: old.count - 1
    }));
  };
};
