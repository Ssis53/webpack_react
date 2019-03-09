export const randomRange = (start, end) => (
  Math.floor(Math.random() * (end - start + 1)) + start
);