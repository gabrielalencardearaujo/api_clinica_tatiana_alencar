export default function formatJsonResponses(statusCode: number, data?: unknown) {

  if (!data) {
    data = [];
  };

  switch (statusCode) {
    case 200:

      return {
        info: 'Success in Request!',
        statusCode,
        data,
      }

    case 400:

      return {
        info: 'Invalid Data!',
        statusCode,
        data,
      }

    case 401:

      return {
        info: 'Not authenticated!',
        statusCode,
        data,
      }

    case 403:

      return {
        info: 'Not authorized!',
        statusCode,
        data,
      }

    case 404:

      return {
        info: 'Not exist!',
        statusCode,
        data,
      }


    case 500:

      return {
        info: 'An unexpected error occurred in our services, please try later!',
        statusCode,
        data,
      }

    default:
      
      return {
        info: 'Invalid Status Code!',
        statusCode,
      }
  }
}