import axios from 'axios';
import { Data } from '../types';

export type GetHomePageResponse = {
  data: Data;
  meta?: unknown;
  status: number;
};

async function getHomePage(): Promise<GetHomePageResponse | string> {
  try {
    // 👇️ const data: getHomePageResponse
    const { data, status } = await axios.get<GetHomePageResponse>(
      'http://localhost:1337/api/home?populate=*',
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
  getHomePage,
}
