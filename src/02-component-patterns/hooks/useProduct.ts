import { useEffect, useState } from "react";

import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductsArgs) => {
  const [counter, setCounter] = useState(initialValues?.count || value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(
      initialValues?.maxCount
        ? Math.min(counter + value, initialValues?.maxCount)
        : counter + value,
      0
    );

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    setCounter(initialValues?.count || value);
  }, [value]);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};

export default useProduct;
