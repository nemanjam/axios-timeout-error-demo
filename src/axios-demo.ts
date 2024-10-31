import axios from 'axios';
import { JSDOM } from 'jsdom';

import { axiosInstance, handleAxiosError } from './axios-instance';

const fetchWaitSeconds = 7;

export const sleep = async (seconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export interface Result {
  htmlDocument: Document;
  htmlContent: string;
}

export const fetchHtml = async (url: string): Promise<Result> => {
  try {
    const response = await axiosInstance.get<string>(url);
    const htmlContent = response.data;

    await sleep(fetchWaitSeconds);

    const htmlDocument = new JSDOM(htmlContent).window.document;

    return { htmlDocument, htmlContent };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleAxiosError(error);
    }

    const message = `Unknown fetchHtml error. ${error}`;
    console.error(message, error);
    throw new Error(message);
  }
};
