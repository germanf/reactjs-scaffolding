import axios from 'axios';
import config from '../config';
import { getToken } from '../api/auth_token';

const defaultAxiosConfs = {
  // `url` is the server URL that will be used for the request
  url: '',

  // `method` is the request method to be used when making the request
  method: 'get', // default

  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: `${config.apiUrl}/api/`,

  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // The last function in the array must return a string, an ArrayBuffer, or a Stream
  // transformRequest: data => data,

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  // transformResponse: [data => data],

  // `headers` are custom headers to be sent
  headers: { 'X-Requested-With': 'XMLHttpRequest' },

  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  params: {},

  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  // paramsSerializer: (params) => {
  //  return Qs.stringify(params, { arrayFormat: 'brackets' });
  // },

  // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream
  data: {},

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000,

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default

  // `adapter` allows custom handling of requests which makes testing easier.
  // Return a promise and supply a valid response (see [response docs](#response-api)).
  // adapter: function (config) {
       /* ... */
  // },

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // auth: {
  //   username: 'janedoe',
  //   password: 's00pers3cret'
  // },

  // `responseType` indicates the type of data that the server will respond with
  // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // `onUploadProgress` allows handling of progress events for uploads
  // onUploadProgress: progressEvent => progressEvent,

  // `onDownloadProgress` allows handling of progress events for downloads
  // onDownloadProgress: progressEvent => progressEvent,

  // `maxContentLength` defines the max size of the http response content allowed
  maxContentLength: 2000,

  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: status => status >= 200 && status < 300,

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 5 // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows to configure options like
  // `keepAlive` that are not enabled by default.
  // httpAgent: new http.Agent({ keepAlive: true }),
  // httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' defines the hostname and port of the proxy server
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing `Proxy-Authorization`
  // custom headers you have set using `headers`.
  // proxy: {
  //  host: '127.0.0.1',
  //  port: 9000,
  //  auth: {
  //    username: 'mikeymike',
  //    password: 'rapunz3l'
  //  }
  // },

  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  // cancelToken: new CancelToken(cancel => cancel)
};

// Add a request interceptor
// axios.interceptors.request.use(conf => conf, error => Promise.reject(error));


const instance = axios.create(defaultAxiosConfs);

// Add a response interceptor

// Add a response interceptor
instance.interceptors.response.use(
  response => response,
  error => Promise.reject({
    ...error.response.data,
    status: error.response.status
  })
);


const asyncRequest = ({
  secured
}, request) => {
  if (secured) {
    instance.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
  }
  return request(instance);
};

export default {

  get: (url = '', secured = false, otherConfigs = {}) =>
    asyncRequest({ secured }, req => req.get(url, otherConfigs)),

  post: (url = '', data = {}, secured = false, otherConfigs = {}) =>
    asyncRequest({ secured }, req => req.post(url, data, otherConfigs)),

  put: (url = '', data = {}, secured = false, otherConfigs = {}) =>
    asyncRequest({ secured }, req => req.put(url, data, otherConfigs)),

  delete: (url = '', secured = false, otherConfigs = {}) =>
    asyncRequest({ secured }, req => req.delete(url, otherConfigs))

};
