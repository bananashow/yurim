import { BUCKET } from '../constants/api';
import { formatImageFileName } from '../utils/format';
import supabase from './supabase';

export const imageUpload = async ({ file, storage }: { file: File; storage: string }) => {
  const { data, error } = await supabase.storage.from(BUCKET.YURIM).upload(`${storage}/${file.name}`, file, {
    contentType: file.type,
  });

  if (error) {
    console.error('Error uploading image:', error.message);
    throw error;
  }

  const { data: urlData } = supabase.storage.from(BUCKET.YURIM).getPublicUrl(data.path);
  return urlData.publicUrl;
};

export const imageDelete = async ({ url, storage }: { url: string; storage: string }) => {
  const fileName = formatImageFileName(url);

  const { data, error } = await supabase.storage.from(BUCKET.YURIM).remove([`${storage}/${fileName}`]);
  if (error) {
    console.error('Error uploading image:', error.message);
    throw error;
  }

  return data;
};

export const imageDeleteByFileName = async ({ fileName, storage }: { fileName: string; storage: string }) => {
  const { data, error } = await supabase.storage.from(BUCKET.YURIM).remove([`${storage}/${fileName}`]);
  if (error) {
    console.error('Error deleting image:', error.message);
    throw error;
  }
  return data;
};
