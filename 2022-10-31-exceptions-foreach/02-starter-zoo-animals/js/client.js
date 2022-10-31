const randomInteger = function(max) {
  const randomInteger = Math.floor(Math.random() * max);
  return randomInteger;
}

const fetchData = async function(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();

  const animal = data[randomInteger(data.length)];

  const body = document.querySelector('body');

  output = `
    <article>
      <h2>${animal.name}</h2>
      <img src="${animal.image_link}" alt="Picture of ${animal.name}">
      <ul>
        <li>Diet: ${animal.diet}</li>
        <li>Habitat: ${animal.habitat}</li>
        <li>Range: ${animal.geo_range}</li>
        <li>Avg Weight: ${(parseFloat(animal.weight_min) + parseFloat(animal.weight_max)) / 2} pounds</li>
        <li>Lifespan: ${animal.lifespan} years</li>
      </ul>
    </article>
    `
  body.innerHTML = output;
}
        
fetchData('https://zoo-animal-api.herokuapp.com/animals/rand/10');