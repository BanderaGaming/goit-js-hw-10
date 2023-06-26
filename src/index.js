
import {fetchBreed,fetchCatByBreed} from "./cat-api.js";

const catSelector = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfOutput = document.querySelector('.cat-info');

const hideEl = (e) =>e.style.display = 'none'; 
const showEl = (e) => e.style.display = 'block';
const onChoose = (event) => {
    hideEl(catSelector);
    showEl(loader);
    fetchCatByBreed(event.target.value)
        .then(data => makeMarkup(data))
        .catch(err => {
            console.warn(err); hideEl(loader);showEl(error)
        })
        .finally(()=>{hideEl(loader);showEl(catSelector)});

};

function makeOptions(el) {
    const markup = el.map(breed => {return `<option value="${breed.id}">${breed.name}</option>`});
    catSelector.innerHTML = markup;
};
function makeMarkup(cat) {
  const url = cat[0].url;
  const { name, temperament, description } = cat[0].breeds[0];
  const markup = `<img width='300' src='${url}'/><div class='description'>
    <h1 class='name'>${name}</h1><p class='desc'>${description}</p>
    <p class='temperament'><b>Temperament: </b>${temperament}</p></div>`;
  catInfOutput.innerHTML = markup;
}

hideEl(catSelector);
hideEl(error);
catSelector.addEventListener("change", onChoose);
    fetchBreed()
    .then(res => makeOptions(res))
    .finally(()=>{showEl(catSelector), hideEl(loader)})
    .catch(err => { console.log(err); showEl(error); hideEl(catSelector) });
