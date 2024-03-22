export const UseCep = async (cep: number) => {

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  const CEP = await response.json();
  
  return CEP;

  } catch (error) {
  return {}
  }

};
