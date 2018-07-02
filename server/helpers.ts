export const generateId = (): string => {
  return Math.random().toString(26).slice(2);
};
