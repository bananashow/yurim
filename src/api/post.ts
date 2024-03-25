import { EditCard } from '../types/card';
import { getTable } from '../utils/format';
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
  const table = getTable(type);
  const { data, error } = await supabase.from(table).select('*').eq('id', postId);
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
};

export const editPost = async ({
  type,
  postId,
  updateData,
}: {
  type: string;
  postId: number;
  updateData: EditCard;
}) => {
  const table = getTable(type);
  const { data, error } = await supabase.from(table).update(updateData).match({ id: postId });
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
};
