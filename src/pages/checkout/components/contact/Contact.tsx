import { useState } from "react";
import "./style.css";

export const Contact = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-container">
      <h5>Informações de contato</h5>
      <div className="contact-content">
        <div className="contact-name">
          <label for="nome">nome</label>
          <br />
          <input
            name="name"
            value={inputValue.name}
            onChange={handleInputValue}
            id="nome"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div className="contact-email">
          <label for="email">email</label>
          <br />
          <input
            name="email"
            value={inputValue.email}
            onChange={handleInputValue}
            id="email"
            type="email"
            placeholder="Digite seu email"
            required
          />
        </div>
      </div>
      <div className="checkbox-content">
        <input type="checkbox" className="checkbox-input"></input>
        <p>Desejo receber promoções exclusivas</p>
      </div>
      <div className="contact-buttons">
        {!inputValue.name || !inputValue.email ? (
          <button disabled>
            Finalizar pagamento (sou um botão desabilidado)
          </button>
        ) : (
          <button className="button-primary-buy">
            Finalizar pagamento (sou um botão desabilidado)
          </button>
        )}
      </div>
    </div>
  );
};
