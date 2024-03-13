import { SignInForm } from '../types/auth';
import supabase from './supabase';

export const signIn = async (formData: SignInForm) => {
  try {
    const result = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    return result.data;
  } catch (err) {
    console.error(err);
  }
};
