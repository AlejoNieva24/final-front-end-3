import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);

  const errors = {
    name: "Nombre invalido",
  };

  function handleSubmit(e) {
    e.preventDefault()
    var { name } = document.forms[0];
    const isNameValid = validateName(name);
    if(!isNameValid) {
      setErrorMessages({ name: "name", message: errors.name });
    } else {
      setIsSubmitted(true);
    }
    console.log("form enviado")
  }

  const validateName = () => {
    const sinEspacios = name.trim();
    if (sinEspacios.length > 5){
      return true;
    } else {
      return false;
    }
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input id="name" value={name} onChange={onChangeName} required></input>
        {renderErrorMessage("name")}
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={onChangeEmail} required></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
 );
  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div>Gracias {name}, te contactaremos por {email}</div> : renderForm}
      </div>
    </div>
  );
};

export default Form;
