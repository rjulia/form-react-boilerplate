
export type Data = {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    [key: string]: string;
  };
};

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