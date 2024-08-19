const search = document.getElementById("search");
const searchButton = document.getElementById("search-button");

const result = document.getElementById("result");
const catFact = document.getElementById("cat-fact");

// api - Application Programming Interfaces

const getCatFact = () => {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((values) => {
      catFact.innerText = `${values.fact} | ${values.length} characters`;
    });
};
getCatFact();

async function getGenderByName() {
  let searchValue = search.value;
  result.textContent = "";

  if (searchValue == "") {
    result.textContent = "No value inputted";
    return;
  }

  searchButton.textContent = "searching...";
  console.log("first log that pauses");

  const response = await fetch(`https://api.genderize.io?name=${searchValue}`);

  const data = await response.json();

  result.innerText = `name ${data.name} | Gender ${
    data.gender == "male" ? "Boy" : "Girl"
  } | count - ${data.count} | gender probability ${data.probability}`;
  searchButton.textContent = "Check gender";
  console.log("Data: ", data);
}

searchButton.onclick = getGenderByName;
