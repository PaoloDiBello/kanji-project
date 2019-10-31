//eslint-disable-next-line
import { unregister } from "./Interceptor";

export const apiUrl = `https://kanjialive-api.p.rapidapi.com/api/public/`;

/**
 * whether it is to send the application/json headers along
 * used to reduce code
 * @param {String} method - the method used
 */

const customHeader = () => ({
  "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
  "x-rapidapi-key": "7f44f1fe22mshec2e2210b56e1e2p13d99cjsn1434fcd18c4f"
});

/**
 * whether the data has to be stringified or
 * returned as it is in form requests or
 * simply does not exist in get requests
 * @param {String} method
 * @param {any} data
 */

const getBody = (method, data) => {
  if (["post", "put", "delete"].includes(method)) {
    return JSON.stringify(data);
  } else if (method === "get") {
    return undefined;
  }
};

/**
 *
 * @param {String} method - the method of the request that will be made
 * @param {String} url - the url the request will be made to
 * @param {any} data - the data that is being sent
 */

const base = (method, url, data = {}) => {
  /**
   * this is just a normal node-fetch
   */

  return fetch(`${apiUrl}${url}`, {
    method,
    headers: customHeader(),
    body: getBody(method, data)
  })
    .then(response => response.json())
    .then(res => res)
    .catch(error => ({ error }));
};

/**
 * this binds the methods to the object SuperFetch
 */

const SuperFetch = {};
["get", "post", "put", "delete"].forEach(method => {
  SuperFetch[method] = base.bind(null, method);
});
export default SuperFetch;
