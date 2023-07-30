function maskMoney(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function unMaskMoney(value: string) {
  return Number.parseFloat(
    value.replace('R$', '').replace('.', '').replace(',', '.')
  );
}

const utilFunctions = {
  maskMoney,
  unMaskMoney,
};

export default utilFunctions;
