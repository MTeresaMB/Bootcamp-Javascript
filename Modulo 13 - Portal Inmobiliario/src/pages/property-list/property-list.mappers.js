export const mapPropertyListFromApiToWiewModel = (propertyList) => {
  return propertyList.map(property => mapPropertyFromApiToViewModel(property));
};

const mapPropertyFromApiToViewModel = (property) => {
  return {
    id: property.id,
    title: property.title,
    rooms: `${property.rooms} ${getRoomWords(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    notes: `${property.notes.substring(0, 240)}...`,
    price: `${property.price.toLocaleString()}€`,
    image: Array.isArray(property.images) ? property.images[0] : ''
  };
};

const getRoomWords = (room) => { return room > 1 ? 'habitaciones' : 'habitacion'}

export const mapFilterToQueryParams = filter => {
  let queryParams = '';
  if(filter.saleTypeId) {
    queryParams = `${queryParams}saleTypeIds_like=${filter.saleTypeId}&`;
  }
  if(filter.provinceId) {
    queryParams = `${queryParams}provinceId_like=${filter.provinceId}&`;
  }
  if(filter.minRooms) {
    queryParams = `${queryParams}rooms_gte=${filter.minRooms}&`;
  }
  if(filter.minBathrooms) {
    queryParams = `${queryParams}bathrooms_gte=${filter.minBathrooms}&`;
  }
  if(filter.minPrice) {
    queryParams = `${queryParams}price_gte=${filter.minPrice}&`;
  }
  if(filter.maxPrice) {
    queryParams = `${queryParams}price_lte=${filter.maxPrice}&`;
  }
  return queryParams.slice(0, -1);
}
