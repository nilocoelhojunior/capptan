// @flow
type ResponseType = {
  headers: Map<*, *>,
  json: () => Object,
  text: () => string,
};

const parseResponseBody = (response: ResponseType): Object | string => {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response.json();
  }

  return response.text();
};

export default parseResponseBody;
