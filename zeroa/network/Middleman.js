export const local_houses = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

const ZEROA_API_ADDRESS = "http://192.168.190.33:8001/api";

export const netRequest = async (url, body) => {
  try {
    const request = await fetch(ZEROA_API_ADDRESS + url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams(body).toString(),
    });

    const response = await request.json();

    if (!response.success) throw new Error("unable to read response");

    return response;
  } catch (error) {
    console.log("koma error enawa: ", error);
  }
};
