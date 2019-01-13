//@flow
function RadioGroup<Type>(list: Array<Type>) {
  let selected: ?Type;
  const group: Array<Type> = list;
  this.getSelected = (): ?Type => {
    return selected;
  };
  this.select = (itemToFind: Type): ?Type => {
    group.find(item => {
      if (item === itemToFind) {
        selected === itemToFind;
      }
    });
    return selected;
  };
}

export default RadioGroup;
