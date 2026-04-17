export async function apiRequest<T>(
  request: () => Promise<any>
): Promise<T> {
  try {
    const res = await request();
    // console.log("api success:", res.data);
    return res.data;
  } catch (error: any) {
    console.error("api error:", error);

    if (error?.response) {
      console.error("server response:", JSON.stringify(error.response.data));
    }

    let message = error?.response?.data?.message || error.message || "request failed";
    if (error?.response?.data?.errors?.length == 1 && error?.response?.data?.errors[0].message) {
      message = error?.response?.data?.errors[0].message;
    }

    throw new Error(message);
  }
}