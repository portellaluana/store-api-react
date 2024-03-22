export const UseCategories = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    if (!response.ok) {
      throw new Error('Erro ao obter os categorias');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição da API:', error);
    window.location.href = '/erro';
    return error;
  }
};



