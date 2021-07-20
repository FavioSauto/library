import type { IAuthor } from './models/authors';

export interface IFormData {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  nationality?: string;

  title?: string;
  description?: string;
  edition?: any;
  publishedDate?: string;
  publishedCountry?: string;
  author?: any;
}

export interface IFormProps {
  formData: IFormData;
  setFormData: any;
  authors?: IAuthor[];
}

export interface IDefaultData {
  [index: string]: any;
}

export interface IDisplayForm {
  [index: string]: any;
}
