const fetchData = async function() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  console.log(data);
  document.querySelector('body').innerHTML = `<h1>${data[6].title}</h1>`;
}

fetchData();