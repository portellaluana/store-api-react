export const UseProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    
    if (!response.ok) {
      throw new Error('Erro ao obter os produtos');
    }
    const retorno = await response.json();
    
    const data = retorno.map(product => ({
      ...product,
      quantidade: 1 
    }));

    return data;
  } catch (error) {
    console.error('Erro na requisição da API:', error);
    window.location.href = '/erro';
    return error;
  }
};