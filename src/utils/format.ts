import { TABLE } from '../constants/api';

export const formatDateTime = (inputDateTime: string) => {
  const dateTime = new Date(inputDateTime);
  const date = dateTime.toISOString().split('T')[0];
  const time = `${dateTime.getHours()}:${dateTime.getMinutes() < 10 ? '0' : ''}${dateTime.getMinutes()}`;
  return `${date} ${time}`;
};

export const formatImageFileName = (url: string) => {
  const parts = url.split('/');
  return parts[parts.length - 1];
};

export const getTable = (type: string) => {
  let table;
  switch (type) {
    case 'home' || 'home_interior':
      table = TABLE.HOME_INTERIOR;
      break;
    case 'store' || 'store_interior':
      table = TABLE.STORE_INTERIOR;
      break;
    case 'point' || 'point_interior':
      table = TABLE.POINT_INTERIOR;
      break;
    default:
      table = TABLE.HOME_INTERIOR;
      break;
  }
  return table;
};
