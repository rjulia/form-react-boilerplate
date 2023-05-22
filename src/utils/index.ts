import axios from 'axios';
import { Data } from '../types';

export function getStrapiMedia(url:string) {
  if (url == null) {
    return null
  }
  if (url.startsWith('http') || url.startsWith('//')) {
    return url
  }
  return `${process.env.GATSBY_API_URL || 'http://localhost:1337'}${url}`
}

export function getStrapiURL(path:string) {
  return `${process.env.GATSBY_API_URL || 'http://localhost:1337'}/api${path}`
}

export type GetPageResponse = {
  data: Data;
  meta?: unknown;
  status: number;
};

async function getPage(slug:string): Promise<GetPageResponse | string> {
  try {
    // 👇️ const data: getHomePageResponse
    const url = getStrapiURL(`/${slug}?populate=deep,3`);
    const { data, status } = await axios.get<GetPageResponse>(
      url,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return {
      data: data.data,
      meta: data.meta,
      status,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export {
  getPage,
}
