export const mapMovementListFromApiToViewModel = (movementsList) => {
  return movementsList.map(account =>
    mapMovementFromApiToViewModel(account));
};

const mapMovementFromApiToViewModel = (movements) => {
  return {
    transaction: new Date(movements.transaction).toLocaleDateString(),
    realTransaction: new Date(movements.realTransaction).toLocaleDateString(),
    description: movements.description,
    amount: `${movements.amount} €`,
    balance: `${movements.balance} €`,
  };
};

export const mapAccountFromApiToViewModel = (account) => {
  return {
    ...account,
    iban: account.iban,
    alias: account.name,
  };
};
