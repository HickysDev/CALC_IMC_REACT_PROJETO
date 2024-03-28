import Button from "./Button";
import {useState} from "react";
import "./ImcCalc.css";

const ImcCalc = ({calcImc}) => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const clearForm = (e) => {
    e.preventDefault();

    setAltura("");
    setPeso("");
  };

const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "")
}

  const handleAlturaChange = (e) => {
    const updatedValue = validDigits(e.target.value)
    setAltura(updatedValue);
  };

  const handlePesoChange = (e) => {
    const updatedValue = validDigits(e.target.value)
    setPeso(updatedValue);
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
              onChange={(e) => handleAlturaChange(e)}
              value={altura}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 70,5 "
              onChange={(e) => handlePesoChange(e)}
              value={peso}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, altura, peso)}/>
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
