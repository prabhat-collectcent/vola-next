// export async function apiRequest<T>(
//   request: () => Promise<any>
// ): Promise<T> {
//   try {
//     console.log("api request started");
//     const res = await request();
//     console.log("api success:", res.data);
//     return res.data;
//   } catch (error: any) {
//     console.error("api error:", error);

//     if (error?.response) {
//       console.error("server response:", JSON.stringify(error.response.data));
//     }

//     let message = error?.response?.data?.message || error.message || "request failed";
//     if(error?.response?.data?.error) message = error.response.data.error; 
//     // showing only first message
//     else if (Object.keys(error?.response?.data?.errors).length >= 1 && Object.entries(error?.response?.data?.errors)[0][1]) {
//       message = Object.entries(error?.response?.data?.errors)[0][1];
//     }
//     throw new Error(message);
//   }
// }

export async function apiRequest<T>(
  request: () => Promise<any>
): Promise<any> {
  try {
    // console.log("api request started");
    const res = await request();
    console.log("api success:", res.data);

    return res.data;
  } catch (error: any) {

    console.error("========== API ERROR ==========");

    if (error.config) {
      console.error("URL:", error.config.url);
      console.error("Method:", error.config.method);
      console.error("Base URL:", error.config.baseURL);
      console.error("Params:", error.config.params);
      console.error("Payload:", error.config.data);
      // console.error("Headers:", error.config.headers);
    }


    // console.error("api error:", error);

    if (error?.response) {
      console.error(`error response: ${error.response.status}`, JSON.stringify(error.response.data));
    }

    let message = error?.response?.data?.message || error.message || "request failed";
    const statusCode = error?.response?.status || 500;
    if (statusCode >= 500) {
      message = "Server error. Please try again later.";
    } else if (error?.response?.data?.error) {
      message = error.response.data.error;
    } else if (error?.response?.data?.errors && Object.keys(error.response.data.errors).length >= 1) {
      const firstError = Object.entries(error.response.data.errors)[0][1];
      if (firstError) message = firstError as string;
    }
    return { success: false, message: message };
  }
}
