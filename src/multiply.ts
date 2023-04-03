export const multiply = (...args) => args?.reduce((acc, i) => acc * i, 1) ?? 1;
