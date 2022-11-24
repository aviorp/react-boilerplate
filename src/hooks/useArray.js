// create React hook to manage array state and actions to update it
import { useState } from "react";

export default function useArray(initialValue) {
  const [value, setValue] = useState(initialValue);

  const add = item => {
    setValue(arr => [...arr, item]);
  };

  const filter = callback => {
    setValue(arr => arr.filter(callback));
  };

  const remove = index => {
    setValue(arr => arr.filter((_, i) => i !== index));
  };

  const update = (index, newValue) => {
    setValue(arr => [
      ...arr.slice(0, index),
      newValue,
      ...arr.slice(index + 1)
    ]);
  };

  const clear = () => setValue([]);

  return {
    value,
    set: setValue,
    add,
    filter,
    remove,
    update,
    clear
  };
}
