import { TABLE } from '../constants/api';
import supabase from './supabase';

export const getInteriorDatas = async (table: string) => {
  const { data, error } = await supabase.from(table).select('*');
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
};

export const getPostInfo = async ({ type, postId }: { type: string; postId: string }) => {
  let table;
  switch (type) {
    case 'home':
      table = TABLE.HOME_INTERIOR;
      break;
    case 'store':
      table = TABLE.STORE_INTERIOR;
      break;
    case 'point':
      table = TABLE.POINT_INTERIOR;
      break;
    default:
      table = TABLE.HOME_INTERIOR;
      break;
  }

  const { data, error } = await supabase.from(table).select('*').eq('id', postId);
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
};
