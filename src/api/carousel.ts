import { TABLE } from '../constants/api';
import supabase from './supabase';

export const getCarouselData = async () => {
  const { data, error } = await supabase.from(TABLE.CAROUSEL).select('*');
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
};

interface EditOrAddParams {
  id?: number;
  title: string;
  review: string;
  newImageUrl: string;
}

export const addCarousel = async ({ title, review, newImageUrl }: EditOrAddParams) => {
  const { data, error } = await supabase.from(TABLE.CAROUSEL).insert({
    title,
    review,
    img: newImageUrl,
  });
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
};

export const editCarousel = async ({ id, title, review, newImageUrl }: EditOrAddParams) => {
  const { data, error } = await supabase
    .from(TABLE.CAROUSEL)
    .update({
      title,
      review,
      img: newImageUrl,
    })
    .eq('id', id);
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
};

export const deleteCarousel = async (carouselId: number) => {
  const { data, error } = await supabase.from(TABLE.CAROUSEL).delete().eq('id', carouselId);
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
};
