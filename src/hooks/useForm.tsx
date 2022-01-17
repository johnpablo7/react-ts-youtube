import { ChangeEvent, useState } from "react";

// export function useForm<T>(initState: T) {
export const useForm = <T extends Object>(initState: T) => {
  const [formulario, setFormulario] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    // console.log(name, value);

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return {
    formulario,
    handleChange,
    ...formulario,
  };
};
