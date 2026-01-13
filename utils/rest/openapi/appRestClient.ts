import { RestClient, RestInterceptor } from "@povio/openapi-codegen-cli";

import { apiUrl } from "@/constants/api";

import { AppErrorHandler } from "./errorHandler";

const RequestInterceptor = new RestInterceptor((client) => {
  return client.interceptors.request.use(
    async (config) => {
      // attach token to request header
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
});

const ResponseInterceptor = new RestInterceptor((client) => {
  return client.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
});

export const AppRestClient = new RestClient({
  config: { baseURL: apiUrl },
  errorHandler: AppErrorHandler,
  interceptors: [RequestInterceptor, ResponseInterceptor],
});
