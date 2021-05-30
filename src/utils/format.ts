export const priceFormatted = (value : any) =>
new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}).format(value);