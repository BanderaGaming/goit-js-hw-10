import axios from "axios";
import fetchBreeds from "./cat-api.js";
console.log(1)
axios.defaults.headers.common["x-api-key"] = "live_9MJGTz4hnpLStj3BEyzU74ZrSVgEKcU2lVoujwluV1QG8LRVEyOlfT9i5QEvvQEF";

const url = "https://api.thecatapi.com/v1/breeds";
const selector = document.querySelector('select.breed-select')
fetchBreeds(url)
fetch('https://api.thecatapi.com/v1/images/search?breed_ids=3').catch(error => console.log(error))
