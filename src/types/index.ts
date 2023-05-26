
interface Fields {
  name: string;
  type: string;
  label: string;
  formType: string;
  className: string;
  validation?: {
    type: string;
    required: boolean;
    email?: boolean;
    message?: string;
    min?: number;
    max?: number;
  };
  options?: {
    value: string;
    label: string;
  }[];  
}
export interface Data {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    fields: Fields[];
    name: string;
    [key: string]: string | Fields[];
  };
}
export interface DataResponde {
  data: Data | Data[]
  status: number
  meta?: unknown
}

export interface PropsPage {
  data: Data
  dataForms?: Data[]
  loading: boolean
}

export interface BlockBuilder {
  id: number;
  __component: string
  [key: string]: string | number;
}

export interface Image { 
  data: {
    id: string;
    attributes: {
      url: string;
      [key: string]: string;
    };
  };
}