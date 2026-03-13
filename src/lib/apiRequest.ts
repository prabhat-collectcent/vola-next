export async function apiRequest<T>(
  request: () => Promise<any>
): Promise<T> {
  try {
    const res = await request();

    console.log("api success:", res.data);

    return res.data;
  } catch (error: any) {
    console.error("api error:", error);

    if (error?.response) {
      console.error("server response:", error.response.data);
    }

    throw error;
  }
}