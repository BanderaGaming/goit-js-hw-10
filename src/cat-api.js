import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_9MJGTz4hnpLStj3BEyzU74ZrSVgEKcU2lVoujwluV1QG8LRVEyOlfT9i5QEvvQEF";

const BASE_URL = 'https://api.thecatapi.com/v1';

function fetchBreed() {
  return fetch(`${BASE_URL}/breeds`)
      .then(res =>{
      if (!res.ok) {
         throw new Error(res.status)
         }
         return res.json()
      })
};
function fetchCatByBreed(id) {
  return fetch(`${BASE_URL}/images/search?breed_ids=${id}`)
      .then(res =>{
      if (!res.ok) {
         throw new Error(res.status)
         }
         return res.json()
      })
};

export { fetchBreed,fetchCatByBreed }; 