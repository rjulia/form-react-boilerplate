import axios from 'axios';
import { DataResponde } from '../types';

export function getStrapiMedia(url:string) {
  if (url == null) {
    return null
  }
  if (url.startsWith('http') || url.startsWith('//')) {
    return url
  }
  return `${process.env.REACT_APP_URL || 'http://localhost:1337'}${url}`
}

export function getStrapiURL(path:string) {
  return `${process.env.REACT_APP_URL || 'http://localhost:1337'}/api${path}`
}


async function getPage(slug:string): Promise<DataResponde | string> {
  try {
    // 👇️ const data: getHomePageResponse
    const url = getStrapiURL(`/${slug}?populate=deep,3`);
    const { data, status } = await axios.get<DataResponde>(
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

async function getFornById(id:string): Promise<any | string> {
  try {
    // 👇️ const data: getHomePageResponse
    const url = getStrapiURL(`/forms/${id}?populate=deep,3`);
    const { data, status } = await axios.get<any>(
      url,
      {
        headers: {
          Accept: 'application/json',
        },
      },
      );
      
      console.log("🚀 ~ file: index.ts:53 ~ getFornById ~ data:", data)
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
  getFornById,
}
