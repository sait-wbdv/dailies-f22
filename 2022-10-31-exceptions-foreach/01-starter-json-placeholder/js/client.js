const randomInteger = function(max) {
  const randomInteger = Math.floor(Math.random() * max);
  return randomInteger;
}

const fetchData = async function(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();

  const post = data[randomInteger(data.length)];
  document.querySelector('body').innerHTML = `<h1>${post.title}</h1>
                                              <p>${post.body}</p>`;
}

fetchData('https://jsonplaceolder.typicode.com/posts');