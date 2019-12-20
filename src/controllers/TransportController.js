import axios from 'axios';
import { getJwtToken } from 'utils/utils';

class TransportController {
  constructor() {
    this.transport = axios.create({
      baseURL: window.ngrokUrl && process.env.REACT_APP_ENVIRONMENT !== 'production'
        ? window.ngrokUrl : process.env.REACT_APP_BASE_URL,
      timeout: 900000,
    });
    this.transport.interceptors;

    this.transport.interceptors.request.use(async (config) => {
      const token = await getJwtToken();
      config.headers.common.Authorization = `JWT ${token}`;
      return config;
    }, (err) => Promise.reject(err));
    this.transport.interceptors.response.use(this.successHandler, this.errorHandler);
    return this.transport;
  }

  successHandler(response) {
    return response;
  }

  errorHandler(err) {
    return Promise.reject(err);
  }
}

const transport = new TransportController();
export { transport as TransportController };
