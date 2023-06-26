import axios from "axios";
import {fetchBreed,fetchCatByBreed} from "./cat-api.js";

axios.defaults.headers.common["x-api-key"] = "live_9MJGTz4hnpLStj3BEyzU74ZrSVgEKcU2lVoujwluV1QG8LRVEyOlfT9i5QEvvQEF";

const catSelector = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfOutput = document.querySelector('.cat-info');

const hideEl = (e) =>e.style.display = 'none'; 
const showEl = (e) => e.style.display = 'block';
const onChoose = (event) =>  fetchCatByBreed(event.target.value).then();

function makeOptions(el) {
    const markup = el.map(breed => {return `<option value="${breed.id}">${breed.name}</option>`});
    catSelector.innerHTML = markup;
};
function makePage(el) {
    // const markup = `<img src="${}" alt="">`;
    catSelector.innerHTML = markup;
};

hideEl(catSelector);
hideEl(error);
catSelector.addEventListener("change", onChoose);

fetchBreed()
    .then(res => makeOptions(res))
    .finally(showEl(catSelector), hideEl(loader))
    .catch(err => { console.log(err); showEl(error); hideEl(catSelector) });
