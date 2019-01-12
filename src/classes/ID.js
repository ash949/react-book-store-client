function ID(newId) {
  let id;
  Object.defineProperty(this, "id", {
    get: () => {
      return id;
    },
    set: newId => {
      if (!/^[1-9]\d*$/.test(newId)) {
        throw new Error("Validation failed. Expected valid ID");
      } else {
        id = newId;
      }
    }
  });
  this.id = newId;
}

const id = id => {
  return new ID(id);
};
export { ID as default, id };
