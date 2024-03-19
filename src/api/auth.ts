import { SignInForm } from '../types/auth';
import supabase from './supabase';

export const signIn = async (formData: SignInForm) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });
  if (error) {
    console.error('로그인 에러:', error.message);
    throw error;
  }
  return data;
};
