// import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  name: string;
  edad: number;
}

export const Formulario = () => {
  const { email, name, edad, handleChange, formulario } = useForm<FormData>({
    email: "john@gmail.com",
    name: "John Pablo",
    edad: 35,
  });

  // const { email, name, edad } = formulario;

  // const [formulario, setFormulario] = useState({
  //   email: "",
  //   nombre: "",
  // });

  // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = target;
  //   // console.log(name, value);

  //   setFormulario({
  //     ...formulario,
  //     [name]: value,
  //   });
  // };

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Edad:</label>
        <input
          type="number"
          className="form-control"
          name="edad"
          value={edad}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
