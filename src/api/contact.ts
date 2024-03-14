import { TABLE } from '../constants/api';
import { ContactForm } from '../types/contact';
import supabase from './supabase';

export const addInquiry = async (data: ContactForm) => {
  const { error } = await supabase.from(TABLE.CONTACT).insert({
    address: data.address,
    py: data.py,
    name: data.name,
    phone: data.phone,
    budget: data.budget,
    question: data.question,
  });
  if (error) {
    console.error('supabase error:', error.message);
    return null;
  }
};

export const getInquiryList = async () => {
  const { data, error } = await supabase.from(TABLE.CONTACT).select('*').order('created_at', { ascending: false });
  if (error) {
    console.error('supabase error:', error.message);
    return null;
  }
  return data;
};

export const deleteInquiry = async (inquiryId: number) => {
  const { error } = await supabase.from(TABLE.CONTACT).delete().eq('id', inquiryId);
  if (error) {
    console.error('supabase error:', error.message);
    return null;
  }
};
