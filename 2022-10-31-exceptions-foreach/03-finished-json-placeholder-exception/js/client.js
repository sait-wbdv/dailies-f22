const randomInteger = function(max) {
  const randomInteger = Math.floor(Math.random() * max);
  return randomInteger;
}

const fetchData = async function(endpoint) {
  try {
    // Any error will be thrown and caught in the catch block
    const response = await fetch(endpoint);
    const data = await response.json();
  
    const post = data[randomInteger(data.length)];
    document.querySelector('body').innerHTML = `<h1>${post.title}</h1>
                                                <p>${post.body}</p>`;
  } catch (error){
    // This code only runs when an exception (error) is thrown
    console.log('Message: ', error.message);
    console.log('Name: ', error.name);
    console.log('Cause: ', error.cause);

    document.querySelector('body').innerHTML = `<h1>There was an error</h1>
                                                <p>${error.message}</p>`;
  }
}

fetchData('https://jsonplaceholder.typicode.com/posts');