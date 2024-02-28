import { TABLE } from '../constants/api';
import { ContactForm } from '../types/contact';
import supabase from './supabase';

export const addInquiry = async (data: ContactForm) => {
  try {
    await supabase.from(TABLE.CONTACT).insert({
      address: data.address,
      py: data.py,
      name: data.name,
      phone: data.phone,
      budget: data.budget,
      question: data.question,
    });
  } catch (err) {
    console.error(err);
  }
};
