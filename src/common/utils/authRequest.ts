import axios from 'axios';

// TODO: 替换环境变量
export const ApiBaseUrl = 'http://127.0.0.1:7001/';

export function navigateUrl(url: string) {
  const element = document.createElement('a');

  if (url.startsWith('http://') || url.startsWith('https://')) {
    element.href = url;
  } else {
    element.href = `http://${url}`;
  }

  element.click();
}

// create axios instance
const authRequest = axios.create({
  baseURL: ApiBaseUrl,
  timeout: 12 * 1000,
});

// set default headers
// request.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded';

const handleRespError = (status: number, message: string) => {
  switch (status) {
    case 403:
      // TODO show message
      // console.log('Forbidden');
      break;
    case 401:
      // TODO need Login
      // console.log('GO TO LOGIN PAGE');
      break;
    default:
    // TODO handle other error
    // console.log(message);
  }
};

// set every request headers with JWT Token

// let JET_TOKEN = localStorage.getItem('JWT');

// authRequest.interceptors.request.use(req => {
//     req.headers = {
//       Authorization: `Bearer ${JET_TOKEN}`,
//     };
//     return req;
// });

// set response interceptor
authRequest.interceptors.response.use(
  res => {
    if (res.status < 300) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res);
    }
  },
  err => {
    const { res } = err;
    if (res) {
      handleRespError(res.status, res.data.message);
      return Promise.reject(res);
      // network error (no response)
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        status: -1,
        message: 'Check your network',
      });
    }
  },
);

export { authRequest };
