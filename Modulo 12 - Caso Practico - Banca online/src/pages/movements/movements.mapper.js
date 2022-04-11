export const mapMovementsListApiToViewModel = movementsList => {
  return movementsList.map(movement => mapMovementsFromApiToViewModel(movement));
}

