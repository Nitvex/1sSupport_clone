import store from "store";

export default async function requestToAPI(options: {
  url: string;
  method?: string;
  headers?: {};
  body?: {};
}) {
  try {
    const accessToken = store.getState().signIn.userData.accessToken;
    const response = await fetch(options.url, {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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
