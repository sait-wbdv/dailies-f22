const section = document.querySelector('.posts');

const fetchData = async function(endpoint) {
  try {
    const response = await fetch(endpoint);
    const posts = await response.json();
  
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    // Create our accumulator variable
    let output = '';

    const handlePost = function(post) {
      // Gradually add the items to our post with each iteration
      output += `
        <article>
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </article>
      `;
    }

    // Loop through the data
    posts.forEach(handlePost);

    // Output the HTML to the page
    section.innerHTML = output;

  } catch (error){
    section.innerHTML = `<h2>There was an error</h12>
                        <p>${error.message}</p>`;
  }
}

fetchData('https://jsonplaceholder.typicode.com/posts');