import { BUCKET, STORAGE, TABLE } from '../constants/api';
import { formatImageFileName } from '../utils/format';
import supabase from './supabase';

// -------------------------TABLE-------------------------
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

// -------------------------STORAGE-------------------------
export const imageUpload = async (file: File) => {
  const { data, error } = await supabase.storage.from(BUCKET.YURIM).upload(`${STORAGE.CAROUSEL}/${file.name}`, file, {
    contentType: file.type,
  });

  console.log(data);

  if (error) {
    console.error('Error uploading image:', error.message);
    throw error;
  }

  const { data: urlData } = supabase.storage.from(BUCKET.YURIM).getPublicUrl(data.path);
  return urlData.publicUrl;
};

export const imageDelete = async (url: string) => {
  const fileName = formatImageFileName(url);

  const { data, error } = await supabase.storage.from(BUCKET.YURIM).remove([`${STORAGE.CAROUSEL}/${fileName}`]);
  if (error) {
    console.error('Error uploading image:', error.message);
    throw error;
  }

  return data;
};
