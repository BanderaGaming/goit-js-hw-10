function fetchBreeds(url) {
   fetch(url).catch(error=> console.log(error))
}
export default fetchBreeds; 