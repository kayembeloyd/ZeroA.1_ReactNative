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

export const lilongweLocations = [
  "Area 10",
  "Area 11",
  "Area 12",
  "Area 13",
  "Area 14",
  "Area 15",
  "Area 16",
  "Area 17",
  "Area 18",
  "Area 19",
  "Area 20",
  "Area 21",
  "Area 22",
  "Area 23",
  "Area 24",
  "Area 25",
  "Area 26",
  "Area 27",
  "Area 28",
  "Area 29",
  "Area 30",
  "Area 31",
  "Area 32",
  "Area 33",
  "Area 34",
  "Area 35",
  "Area 36",
  "Area 37",
  "Area 38",
  "Area 39",
  "Area 40",
  "Area 41",
  "Area 42",
  "Area 43",
  "Area 44",
  "Area 45",
  "Area 46",
  "Area 47",
  "Area 48",
  "Area 49",
  "Area 50",
  "Kanengo",
  "Lingadzi",
  "Mtandire",
  "Kawale",
  "Chinsapo",
  "Mchesi",
  "Kabula",
  "Senti",
  "Likuni",
  "Kawere",
  "Mchitanjiru",
  "Kauma",
  "Kawimbe",
  "Nthandire",
  "Chipasula",
  "Kawonga",
  "Ntandile",
  "Biwi",
  "Chilinde",
  "Kamuzu Institute",
  "Malingunde",
  "Namitete",
  "Kawale",
  "Madziabango",
  "Nankhaka",
  "Malingunde",
  "Bunda",
  "Bwaila",
  "Kamudzi",
  "Kanengo",
  "Sosola",
  "Mvunguti",
  "Mzuzu Road",
  "Civo Stadium",
  "Likuni Boys Secondary School",
];

const ZEROA_API_ADDRESS = "http://192.168.210.33:8001/api";

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
