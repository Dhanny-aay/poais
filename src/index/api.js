import config from "../config";
import SnackbarUtils from "../utils/snackbarUtils";

const api = async (method, uri, body = null) => {
  const url = config.baseURL + uri;
  const token = localStorage.getItem("poais_token");

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const options = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(url, options);
    const res = await response.json();

    // console.log(res);

    if (response.ok) {
      // Handle access token if present
      if (res.token) {
        localStorage.setItem("poais_token", res.token);
      }

      // Display success message if present
      if (res.data && res.data.message) {
        SnackbarUtils.success(res.data.message);
      } else if (res.message) {
        SnackbarUtils.success(res.message);
      }

      return res;
    } else {
      // Handle different error status codes
      if (response.status === 403) {
        localStorage.removeItem("poais_token");
        window.location = "/login";
      } else if (response.status === 409) {
        SnackbarUtils.error(
          res?.data?.message ? res.data.message : "Something went wrong"
        );
        throw new Error(
          res?.data?.message ? res.data.message : "Something went wrong"
        );
      } else if (response.status === 422) {
        SnackbarUtils.error(
          res?.message ? res.message : "Something went wrong"
        );
        throw new Error(res?.message ? res.message : "Something went wrong");
      } else {
        SnackbarUtils.error(res?.message ? res.message : response.statusText);
        throw new Error(res?.message ? res.message : response.statusText);
      }
    }
  } catch (err) {
    SnackbarUtils.error("Fetch error: " + err.message);
    throw err;
  }
};

export default api;
