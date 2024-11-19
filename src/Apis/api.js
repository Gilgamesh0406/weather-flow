import axios from "axios";

export const handleSearchInput = async (value) => {
  console.log(value);
  const res = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
    params: {
      key: "d6e9c8cad9924beab5e145451241707",
      q: value,
    },
  });
  return res;
};
