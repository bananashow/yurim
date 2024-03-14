import { SignInForm } from '../types/auth';
import supabase from './supabase';

export const signIn = async (formData: SignInForm) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });
  if (error) {
    console.error('supabase error:', error.message);
    throw error;
  }
  return data;
};
