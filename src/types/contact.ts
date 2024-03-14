export interface ContactForm {
  address: string;
  py: number;
  name: string;
  phone: string;
  budget: number;
  question?: string;
}

export interface InquiryList extends ContactForm {
  id: number;
  created_at: string;
}
