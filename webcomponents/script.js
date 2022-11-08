//books array

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "A Farewell to Arms", author: "Ernest Hemingway" },
  { title: "Catch 22", author: "Joseph Heller" },
];

//movies array

const movies = [
  { movie: "Interstellar", director: "Christopher Nolan" },
  { movie: "Nobody", director: "Ilya Nalshuller" },
  { movie: "Mission Impossible: Fallout", director: "Christopher McQuarrie" },
];

//append books as list items

function appendBooks(templateId) {
  const booksList = document.getElementById("books");
  const fragment = document.getElementById(templateId);

  // Clear out the content from the ul
  booksList.innerHTML = "";

  // Loop over the books and modify the given template
  books.forEach((book) => {
    // Create an instance of the template content
    const instance = document.importNode(fragment.content, true);
    // Add relevant content to the template
    instance.querySelector(".title").innerHTML = book.title;
    instance.querySelector(".author").innerHTML = book.author;
    // Append the instance ot the DOM
    booksList.appendChild(instance);
  });
}

//append movies list items

function appendMovies(templateId) {
  const movieList = document.getElementById("movies");
  const fragment = document.getElementById(templateId);

  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const instance = document.importNode(fragment.content, true);

    instance.querySelector(".name").innerHTML = movie.movie;
    instance.querySelector(".director").innerHTML = movie.director;

    movieList.appendChild(instance);
  });
}

//listen for radio button change - movies

document
  .getElementById("templates-movies")
  .addEventListener("change", (event) => appendMovies(event.target.value));
appendMovies("movie-template");

//listen for radio button change - books

document
  .getElementById("templates")
  .addEventListener("change", (event) => appendBooks(event.target.value));
appendBooks("book-template");

//launch dialog button and modal template

const template = document.getElementById('dialog-template');

document.body.appendChild(
  document.importNode(template.content, true)
);

document.getElementById('launch-dialog').addEventListener('click', () => {
    const wrapper = document.querySelector('.wrapper');
    const closeButton = document.querySelector('button.close');
    const wasFocused = document.activeElement;
    wrapper.classList.add('open');
    closeButton.focus();
    closeButton.addEventListener('click', () => {
      wrapper.classList.remove('open');
      wasFocused.focus();
    });
  });