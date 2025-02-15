const getErrorMessage = (code: number) => {
  switch (code) {
    case 400:
      return "Bad Request";
    case 401:
      return "Wrong Email or Password";
    case 403:
      return "Forbidden";
    case 404:
      return "Not Found";
    case 500:
      return "Internal Server Error";
    default:
      return "Unknown Error";
  }
};

export default getErrorMessage;
