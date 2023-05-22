
export type Data = {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    [key: string]: string;
  };
};
export interface DataResponde {
  data: Data
  status: number
}

export interface PropsPage {
  data: Data
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