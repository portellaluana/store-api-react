export const formatCurrrency = (value, currency) => {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency,
  });
};
