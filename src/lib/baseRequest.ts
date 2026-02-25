import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { API_BASE_URL } from "@/lib/env";

type RetryRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean
}

export const baseRequest = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

baseRequest.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryRequestConfig;

    if (
      error.response?.status === 403 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/restock-token")
    ) {
      originalRequest._retry = true;

      try {
        await baseRequest.get("/restock-token");
        return baseRequest(originalRequest);
      } catch (exception) {
        return Promise.reject(exception);
      }
    }

    return Promise.reject(error);
  }
);
