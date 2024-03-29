import fetchIntercept from "fetch-intercept";

export const unregister = fetchIntercept.register({
  request: function(url, config) {
    config.headers.intercept = "This was just to test the interceptor";
    // Modify the url or config here
    return [url, config];
  },

  requestError: function(error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function(response) {
    // Modify the reponse object
    return response;
  },

  responseError: function(error) {
    // Handle an fetch error
    return Promise.reject(error);
  }
});
