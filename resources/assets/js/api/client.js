import axios from 'axios';
import { 
    requestInterceptor, 
    requestErrorHandler,
    responseInterceptor,
    responseErrorHandler
} from './interceptors';

const config = {};
const instance = axios.create(config);

instance.interceptors.request.use(requestInterceptor, requestErrorHandler);
instance.interceptors.response.use(responseInterceptor, responseErrorHandler);

export default instance;
