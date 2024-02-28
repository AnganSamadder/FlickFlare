let movies = [];

fetch("http://127.0.0.1:8080/movie/getAll")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // You can access your data here
    movies = data;
    console.log(movies);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
