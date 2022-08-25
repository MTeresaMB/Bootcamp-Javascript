
export const mapTransferFromWiewModelToApi = (transfer) => {
  return {
    email: transfer.email,
    iban: transfer.iban,
    name: transfer.name,
    amount: transfer.amount,
    concept: transfer.concept,
    notes: transfer.notes,
    day: transfer.day,
    month: transfer.month,
    year: transfer.year,
    date: transfer.date

  }
}
