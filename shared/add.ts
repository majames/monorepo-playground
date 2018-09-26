import debounce from 'lodash.debounce';

export const add = (x: number, y: number) => debounce(() => x + y, 10);
