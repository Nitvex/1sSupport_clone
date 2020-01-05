import store from "store";

export default async function requestToAPI(options: {
  url: string;
  method?: string;
  headers?: {};
  body?: {};
  requiresAuthorization?: boolean;
}) {
  try {
    const accessToken = store.getState().loginReducer.userData.accessToken;
    // is there another approach to set default property value?
    // by default, we consider every request needs authorization
    const requiresAuthorization = Object.prototype.hasOwnProperty.call(
      options,
      "requiresAuthorization"
    )
      ? options.requiresAuthorization
      : true;
    const response = await fetch(options.url, {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
        ...(requiresAuthorization && {
          Authorization: `Bearer ${accessToken}`
        }),
        ...options.headers
      },
      body: JSON.stringify(options.body)
    });

    const body = await response.json();
    if (!response.ok) {
      throw body;
    }
    return body.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
