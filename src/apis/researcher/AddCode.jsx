import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;
export const ApiAddCode = (uuid, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/researcher/register/${uuid}`, data)
      .then((res) => {
        resolve(res);
        console.log(BASE_URL);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
