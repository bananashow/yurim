import { BUCKET, STORAGE, TABLE } from '../constants/api';
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

export const editCarousel = async ({ title, review, newImageUrl }: EditOrAddParams) => {
  const { data, error } = await supabase.from(TABLE.CAROUSEL).update({
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

export const imageUpload = async (file: File) => {
  const { data, error } = await supabase.storage.from(BUCKET.YURIM).upload(`${STORAGE.CAROUSEL}/${file.name}`, file, {
    contentType: file.type,
  });

  if (error) {
    console.error('Error uploading image:', error.message);
    throw error;
  }

  const { data: urlData } = supabase.storage.from(BUCKET.YURIM).getPublicUrl(data.path);

  return urlData.publicUrl;
};
