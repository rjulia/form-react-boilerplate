
export type Data = {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    [key: string]: string;
  };
};

export interface BlockBuilder<T> {
  id: number | string;
  __component: string
  [key: string]: string | number | T;
}