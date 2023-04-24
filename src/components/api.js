import axios from "axios";

const URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "84bd127e27msh97824982de541aep1dc7fajsn80e644ca0957",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fromApi = async (url) => {
  const { data } = await axios.get(`${URL}/${url}`, options);
  return data;
};

export default fromApi;

console.log(fromApi("search"));
