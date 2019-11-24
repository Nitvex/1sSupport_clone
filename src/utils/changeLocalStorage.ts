export function addToLocalStorage(objectToAdd: { [key: string]: any }): void {
  Object.keys(objectToAdd).forEach(key => {
    localStorage.setItem(key, objectToAdd[key]);
  });
}

export function removeFromLocalStorage(objectToRemove: {
  [key: string]: any;
}): void {
  Object.keys(objectToRemove).forEach(key => {
    localStorage.removeItem(key);
  });
}
