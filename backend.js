// travel_recommendation.js

function searchDestination() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = "";

  fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
      let results = [];

      if (input.includes("beach")) {
        results = data.beaches;
      } else if (input.includes("temple")) {
        results = data.temples;
      } else if (input.includes("japan")) {
        results = data.countries[0].cities;
      }

      if (results.length === 0) {
        resultsDiv.innerHTML = "<p>No recommendations found.</p>";
        return;
      }

      results.forEach(place => {
        resultsDiv.innerHTML += `
          <div class="card">
            <img src="${place.imageUrl}" alt="${place.name}">
            <h3>${place.name}</h3>
            <p>${place.description}</p>
          </div>
        `;
      });
    });
}

function clearResults() {
  document.getElementById("searchInput").value = "";
  document.getElementById("results").innerHTML = "";
}
