export interface CardInfo {
  id: number;
  created_at: string;
  main_title: string;
  project: string;
  site: string;
  area: number;
  keyword: string;
  title: string;
  content: string;
  images: string[];
  type?: 'edit' | 'add';
}

export interface EditCard {
  main_title: string;
  project: string;
  site: string;
  area: string;
  keyword: string;
  title: string;
  content: string;
  images: string[];
}
