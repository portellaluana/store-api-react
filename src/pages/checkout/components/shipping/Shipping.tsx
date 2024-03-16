import { useState } from "react";
import { fetchCep } from "../../../../api/fetchProducts";

export const Shipping = () => {
  const [address, setAddress] = useState({});

  const handleCep = (e) => {
    
    const cep = e.target.value.replace(/\D/g, "");
    if(cep === ""){
      return null
    }

    fetchCep(cep).then((CEP) => {
      setAddress(CEP);
    }).catch((error) => {
      console.error(error);
    });

  };

  return (
    <div className="shipping-container">
      <h5>endereço para entrega</h5>
      <div className="address-cep">
        <label for='cep'>CEP</label><br/>
        <div className="address-cep-button">
        <input  id='cep' placeholder="Digite seu cep" onBlur={handleCep}/>
        <button className="search-cep" onClick={handleCep}>
          Buscar
        </button>
      </div>
      </div>
      <div className="address-city-neighborhood">
        <div className="address-city">
          <label for='cidade' >Cidade</label>
          <input id="cidade" value={address.localidade} />
        </div>
        <div className="address-neighborhood">
          <label for='bairro'>Bairro</label>
          <input id='bairro' value={address.bairro} />
        </div>
      </div>
      <label for='logradouro'>logradouro</label>
      <input id='logradouro' value={address.logradouro} />

      <div className="address-number-complement">
        <div className="address-number">
          <label for='numero'>número</label>
          <br />
          <input id='numero' />
        </div>

        <div className="address-complement">
          <label for='complemento'>complemento</label>
          <input id='complemento'/>
          <div />
        </div>
        <div>
          <label for='uf'>UF</label>
          <input id='uf' value={address.uf} />
        </div>
      </div>
    </div>
  );
};
